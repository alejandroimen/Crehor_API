const { Subject } = require('../models');

// Crear un comentario
const createSubject = async (req, res) => {
  try {
    const subject = await Subject.create(req.body);
    res.status(201).json(subject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los comentarios
const getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un comentario por ID
const getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    if (subject) {
      res.status(200).json(Subject);
    } else {
      res.status(404).json({ error: 'Subject not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un comentario
const updateSubject = async (req, res) => {
  try {
    const [updated] = await Subject.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedSubject = await Subject.findByPk(req.params.id);
      res.status(200).json(updatedSubject);
    } else {
      res.status(404).json({ error: 'Subject not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un comentario
const deleteSubject = async (req, res) => {
  try {
    const deleted = await Subject.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Subject not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSubject,
  getAllSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject
};
