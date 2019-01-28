const errors = require('./error-definition');

class CustomError {
  constructor(options) {
    const defaultCode = 500;
    this.code = options.code && errors[options.code] ? options.code : defaultCode;
    this.status = errors[this.code].status;
    this.message = options.message || errors[this.code].message;
    this.details = options.details || [];
  }
}

module.exports = CustomError;
