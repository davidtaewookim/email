const { Joi } = require('celebrate');

const mailgun = Joi.object().keys({
  from: Joi.string().required(),
  to: Joi.string().required(),
  subject: Joi.string().optional(),
  text: Joi.string().optional(),
  cc: Joi.string().not().empty().optional(),
  bcc: Joi.string().not().empty().optional(),
});

const personal = Joi.object().keys({
  to: Joi.array().required(),
  subject: Joi.string().optional(),
  cc: Joi.array().optional(),
  bcc: Joi.array().optional(),
});

const sendgrid = Joi.object().keys({
  personalizations: Joi.array().items(personal).required(),
  from: Joi.object().keys({ email: Joi.string().email().required() }),
  content: Joi.array().required(),
});

module.exports = {
  mailgun,
  sendgrid,
};
