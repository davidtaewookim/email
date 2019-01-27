const express = require('express');
const mail = require('../app/mail');

const router = express.Router();

/* POST email */
router.post('/', mail.sendMail);

module.exports = router;
