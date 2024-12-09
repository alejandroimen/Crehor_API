const express = require('express');
const router = express.Router();
const teacher = require('../controllers/Teacher');
const { verifyToken } = require('../controllers/User');

router.get('/teachers/:id', verifyToken, teacher.getTeacherById)
router.get('/teachers', verifyToken, teacher.getAllTeachers),
router.post('/teachers', verifyToken, teacher.createTeacher);
router.put('/teachers/:id', verifyToken, teacher.updateTeacher);
router.delete('/teachers/:id', verifyToken, teacher.deleteTeacher);

module.exports = router;