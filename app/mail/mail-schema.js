const { Joi } = require('celebrate');

const postRequest = {
  headers: Joi.object().keys({
    'content-type': Joi.string().equal('application/json').required(),
  }).unknown(),
  body: Joi.object().keys({
    sender: Joi.string().email().required(),
    recipients: Joi.array().items(Joi.string().email().required()).required(),
    subject: Joi.string().optional(),
    contents: Joi.string().optional(),
    cc: Joi.array().items(Joi.string().email().required()).optional(),
    bcc: Joi.array().items(Joi.string().email().required()).optional(),
  }),
};

const axiosConfig = {
  headers: Joi.object().keys({
    'Content-Type': Joi.string().valid('application/json', 'application/x-www-form-urlencoded').required(),
    Authorization: Joi.string().required(),
  }),
  data: Joi.string().required(),
  url: Joi.string().required(),
};

module.exports = {
  postRequest,
  axiosConfig,
};
