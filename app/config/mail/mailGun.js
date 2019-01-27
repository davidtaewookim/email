const baseMail = require('./base');

class mailGun extends baseMail {
  constructor(object) {
    super(object);
    this.extra = 'mailGun';
  }
}

module.exports = mailGun;
