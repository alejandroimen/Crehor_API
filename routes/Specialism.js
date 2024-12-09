const express = require('express');
const router = express.Router();
const specialism = require('../controllers/Specialism');
const { verifyToken } = require('../controllers/User');

router.get('/specialisms', verifyToken, specialism.getAllSpecialisms),
router.post('/specialisms', verifyToken, specialism.createSpecialism);
router.put('/specialisms/:id', verifyToken, specialism.updateSpecialism);
router.delete('/specialisms/:id', verifyToken, specialism.deleteSpecialism);

module.exports = router;