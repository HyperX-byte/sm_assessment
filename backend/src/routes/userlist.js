const express = require('express');
const { getUserEmails } = require('../controller/userlist');
const router = express.Router();

router.get('/getuseremails', getUserEmails );

module.exports = router;