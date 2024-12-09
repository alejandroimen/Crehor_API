const express = require('express');
const router = express.Router();
const subject = require('../controllers/Subject');
const { verifyToken } = require('../controllers/User');

router.get('/subjects', verifyToken, subject.getAllSubjects),
router.post('/subjects', verifyToken, subject.createSubject);
router.put('/subjects/:id', verifyToken, subject.updateSubject);
router.delete('/subjects/:id', verifyToken, subject.deleteSubject);

module.exports = router;