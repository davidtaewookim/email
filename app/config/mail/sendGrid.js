const baseMail = require('./base');

class sendGrid extends baseMail {
  constructor(object) {
    super(object);
    this.extra = 'sendGrid';
  }
}

module.exports = sendGrid;
