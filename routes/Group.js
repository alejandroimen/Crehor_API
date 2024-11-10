const express = require('express');
const router = express.Router();
const group = require('../controllers/Group');

router.get('/groups', group.getAllGroups),
router.post('/groups', group.createGroup);

module.exports = router;