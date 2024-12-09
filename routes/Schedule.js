const express = require('express');
const router = express.Router();
const schedule = require('../controllers/Schedule');
const { verifyToken } = require('../controllers/User');

router.get('/schedules/:groupId', verifyToken, schedule.getSchedulesByGroup);
router.get('/schedules/teacher/:teacherId', verifyToken, schedule.getSchedulesByTeacher)
router.post('/schedules/:groupId', verifyToken, schedule.setSchedulesByGroup);

module.exports = router;