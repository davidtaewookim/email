const axios = require('axios');
const validateSchema = require('../utils/validate');
const { axiosConfig } = require('./mail-schema');

const sendEmail = data => async () => {
  validateSchema.setSchema(axiosConfig)(data);
  const dataTosend = Object.assign(data, { method: 'POST' });
  const result = await axios(dataTosend);
  return result;
};

module.exports = sendEmail;
