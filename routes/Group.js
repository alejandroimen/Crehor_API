const express = require('express');
const router = express.Router();
const group = require('../controllers/Group');
const { verifyToken } = require('../controllers/User');

router.get('/groups',verifyToken, group.getAllGroups),
router.post('/groups', verifyToken, group.createGroup);

module.exports = router;