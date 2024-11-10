const { Group } = require('../models');

// Crear un comentario
const createGroup = async (req, res) => {
  try {
      const group = await Group.create(req.body);
      res.status(201).json(group);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los comentarios
const getAllGroups = async (req, res) => {
  try {
      const groups = await Group.findAll();
      res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un comentario por ID
const getGroupById = async (req, res) => {
  try {
      const group = await Group.findByPk(req.params.id);
      if (group) {
          res.status(200).json(Group);
    } else {
          res.status(404).json({ error: 'Group not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    createGroup,
    getAllGroups,
    getGroupById,
};
