const express = require('express');
const { celebrate: validate } = require('celebrate');
const mail = require('../app/mail');
const { errorCatcher } = require('../app/utils/error');

const router = express.Router();

/* POST email */
router.post('/',
  validate(mail.schema.postRequest),
  errorCatcher(mail.sendMail));

module.exports = router;
