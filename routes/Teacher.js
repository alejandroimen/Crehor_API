const express = require('express');
const router = express.Router();
const teacher = require('../controllers/Teacher');

router.get('/teachers/:id', teacher.getTeacherById)
router.get('/teachers', teacher.getAllTeachers),
router.post('/teachers', teacher.createTeacher);
router.put('/teachers/:id', teacher.updateTeacher);
router.delete('/teachers/:id', teacher.deleteTeacher);

module.exports = router;