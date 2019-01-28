const { Joi } = require('celebrate');
const { CustomError } = require('../error');

const setSchema = (type) => {
  const validate = (data) => {
    const { error } = Joi.validate(data, type);
    if (error !== null) {
      const code = 400;
      const opts = { code, details: error.details };
      throw new CustomError(opts);
    }
    return true;
  };
  return validate;
};

module.exports = { setSchema };
