const { Specialism } = require('../models');

// Crear un comentario
const createSpecialism = async (req, res) => {
  try {
    const specialism = await Specialism.create(req.body);
    res.status(201).json(specialism);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los comentarios
const getAllSpecialisms = async (req, res) => {
  try {
    const specialisms = await Specialism.findAll();
    res.status(200).json(specialisms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un comentario por ID
const getSpecialismById = async (req, res) => {
  try {
    const specialism = await Specialism.findByPk(req.params.id);
    if (specialism) {
      res.status(200).json(specialism);
    } else {
      res.status(404).json({ error: 'Specialism not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un comentario
const updateSpecialism = async (req, res) => {
  try {
    const [updated] = await Specialism.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedSpecialism = await Specialism.findByPk(req.params.id);
      res.status(200).json(updatedSpecialism);
    } else {
      res.status(404).json({ error: 'Specialism not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un comentario
const deleteSpecialism = async (req, res) => {
  try {
    const deleted = await Specialism.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Specialism not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSpecialism,
  getAllSpecialisms,
  getSpecialismById,
  updateSpecialism,
  deleteSpecialism
};
