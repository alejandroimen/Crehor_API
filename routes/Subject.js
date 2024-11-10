const express = require('express');
const router = express.Router();
const subject = require('../controllers/Subject');

router.get('/subjects', subject.getAllSubjects),
router.post('/subjects', subject.createSubject);
router.put('/subjects/:id', subject.updateSubject);
router.delete('/subjects/:id', subject.deleteSubject);

module.exports = router;