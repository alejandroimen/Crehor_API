const express = require('express');
const router = express.Router();
const specialism = require('../controllers/Specialism');

router.get('/specialisms', specialism.getAllSpecialisms),
router.post('/specialisms', specialism.createSpecialism);
router.put('/specialisms/:id', specialism.updateSpecialism);
router.delete('/specialisms/:id', specialism.deleteSpecialism);

module.exports = router;