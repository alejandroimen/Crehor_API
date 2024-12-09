const { Schedule, Subject, Teacher, Group } = require('../models');


const setSchedulesByGroup = async (req, res) => {
    const { groupId } = req.params;
    const schedules = req.body; // Arreglo de objetos enviado en el cuerpo
  
    try {
      // Validar que el body contiene un arreglo de objetos
      if (!Array.isArray(schedules)) {
        return res.status(400).json({ error: 'El cuerpo debe ser un arreglo de objetos.' });
      }
  
      // Eliminar los horarios existentes del grupo
      await Schedule.destroy({ where: { groupId } });
  
      // Agregar el groupId a cada horario y crear los nuevos
      const newSchedules = schedules.map(schedule => ({
        ...schedule,
        groupId, // Asegurar que cada objeto tenga el groupId correcto
      }));
  
      await Schedule.bulkCreate(newSchedules);
  
      // Actualizar el atributo hasSchedule en la tabla Groups
      const result = await Group.update(
        { hasSchedule: true }, // Establecer hasSchedule a true
        { where: { id: groupId } }
      );

      if (result[0] === 0) {
        return res.status(404).json({ error: 'El grupo no fue encontrado para actualizar hasSchedule.' });
      }

      res.status(201).json({ message: 'Horarios actualizados exitosamente.' });
    } catch (error) {
      console.error('Error configurando horarios:', error);
      res.status(500).json({ error: 'Error configurando horarios.' });
    }
  };
  

  const getSchedulesByGroup = async (req, res) => {
    const { groupId } = req.params;
  
    try {
      // Obtener horarios para el grupo especificado
      const schedules = await Schedule.findAll({
        where: { groupId },
        include: [
          { model: Subject, attributes: ['name'] },
          { model: Teacher, attributes: ['name', 'lastname'] }
        ],
        order: [['hour', 'ASC'], ['day', 'ASC']], // Ordenar por hora y día
      });
  
      // Convertir los resultados a un arreglo plano
      const formattedSchedules = schedules.map(schedule => ({
        day: schedule.day,
        hour: schedule.hour,
        subject: schedule.Subject?.name || '',
        teacher: schedule.Teacher?.name + ' ' + schedule.Teacher?.lastname || '',
      }));
  
      res.status(200).json(formattedSchedules);
    } catch (error) {
      console.error('Error obteniendo horarios:', error);
      res.status(500).json({ message: 'Error obteniendo horarios.', error: error});
    }
  };

  const getSchedulesByTeacher = async (req, res) => {
    const { teacherId } = req.params;
  
    try {
      // Obtener horarios para el grupo especificado
      const schedules = await Schedule.findAll({
        where: { teacherId },
        include: [
          { model: Subject, attributes: ['name'] },
          { model: Teacher, attributes: ['name', 'lastname'] }
        ],
        order: [['hour', 'ASC'], ['day', 'ASC']], // Ordenar por hora y día
      });
  
      // Convertir los resultados a un arreglo plano
      const formattedSchedules = schedules.map(schedule => ({
        day: schedule.day,
        hour: schedule.hour,
        subject: schedule.Subject?.name || '',
        teacher: schedule.Teacher?.name + ' ' + schedule.Teacher?.lastname || '',
      }));
  
      res.status(200).json(formattedSchedules);
    } catch (error) {
      console.error('Error obteniendo horarios:', error);
      res.status(500).json({ message: 'Error obteniendo horarios.', error: error});
    }
  };
  
  module.exports = {
    getSchedulesByGroup,
    setSchedulesByGroup,
    getSchedulesByTeacher
  }