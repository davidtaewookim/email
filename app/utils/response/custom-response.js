const responses = require('./response-definition');

class CustomResponse {
  constructor(options) {
    const defaultCode = 200;
    this.code = options.code && responses[options.code] ? options.code : defaultCode;
    this.status = responses[this.code].status;
    this.message = options.message || responses[this.code].message;
    this.details = options.details || [];
  }
}

module.exports = CustomResponse;
