const express = require('express');
const router = express.Router();
const schedule = require('../controllers/Schedule');

router.get('/schedules', schedule.getAllSchedules),
router.post('/schedules', schedule.createSchedule);

module.exports = router;