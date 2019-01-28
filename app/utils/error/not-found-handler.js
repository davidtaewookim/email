const CustomError = require('./custom-error');

const notFoundHandler = (req, res, next) => {
  const code = 404;
  const { method, path } = req;
  const message = `Cannot ${method} ${path}`;
  const options = { code, message };
  const error = new CustomError(options);
  next(error);
};

module.exports = notFoundHandler;
