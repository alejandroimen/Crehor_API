const express = require('express');
const router = express.Router();
const course = require('../controllers/Course');

router.get('/courses', course.getAllCourses),
router.post('/courses', course.createCourse);

module.exports = router;