const { isCelebrate } = require('celebrate');
const CustomError = require('./custom-error');

const errorHandler = (err, req, res, next) => {
  let options = '';

  if (isCelebrate(err)) {
    // Joi Validation Error, convert it to CustomError
    options = { code: 400, details: err.details };
  } else if (!(err instanceof CustomError)) {
    // All other types of errors, convert it to CustomError
    const { statusCode, name, message } = err;
    options = { code: statusCode, details: [{ key: name, value: message }] };
  }

  const error = options ? new CustomError(options) : err;
  res.status(error.code).send(error);
};

module.exports = errorHandler;
