class baseMail {
  constructor(email) {
    this.recipient = email.recipient;
    this.cc = email.cc;
    this.bcc = email.bcc;
    this.subject = email.subject;
    this.body = email.body;
  }
}

module.exports = baseMail;
