require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User, Teacher } = require('../models');

const secretKey = process.env.SECRET_KEY; 

// Registrar un nuevo usuario
const registerUser = async (req, res) => {
    try {
        const { username, password, isTeacher, teacher } = req.body;
    
        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);
    
        let teacherId = 16;
    
        // Si se proporciona el objeto teacher en el body, creamos el Teacher
        if (isTeacher) {
          const newTeacher = await Teacher.create(teacher);
          teacherId = newTeacher.id; // Obtenemos el ID del Teacher creado
        }
    
        // Crear el usuario con el idTeacherAssociated correspondiente
        const user = await User.create({
          username,
          password: hashedPassword,
          idTeacherAssociated: teacherId
        });
    
        res.status(201).json(user);
      } catch (error) {
        console.error('Error al registrar el usuario:', error);
        res.status(500).json({ error: error.message });
      }
};

// Inicio de sesión de usuario
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Comparar la contraseña proporcionada con el hash almacenado
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generar un token JWT
    const token = jwt.sign({ id: user.id, role: user.role, teachId: user.idTeacherAssociated }, secretKey, {
      expiresIn: '1h' // Token expira en 1 hora
    });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Middleware para verificar el token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'] || req.headers['x-access-token'];
  if (!token) {
    return res.status(403).json({ message: 'No token provided.' });
  }

  jwt.verify(token.split(' ')[1], secretKey, (err, decoded) => { // Asegúrate de que el token esté correctamente formateado
    if (err) {
      return res.status(500).json({ message: 'Failed to authenticate token.' });
    }
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

module.exports = {
  registerUser,
  loginUser,
  verifyToken
};