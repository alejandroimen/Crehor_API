const { Schedule } = require('../models');

// Crear un comentario
const createSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.create(req.body);
    res.status(201).json(schedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los comentarios
const getAllSchedules = async (req, res) => {
  try {
    const Schedules = await Schedule.findAll();
    res.status(200).json(Schedules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSchedule,
  getAllSchedules
};
