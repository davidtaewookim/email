const failover = require('./failover');
const errorCatcher = require('./catcher');
const CustomError = require('./custom-error');
const errorHandler = require('./error-handler-middleware');
const notFoundHandler = require('./not-found-handler');

module.exports = {
  failover,
  errorCatcher,
  CustomError,
  errorHandler,
  notFoundHandler,
};
