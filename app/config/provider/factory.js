const mailgun = require('./mailgun');
const sendgrid = require('./sendgrid');

const factory = (provider) => {
  const providers = {
    mailgun,
    sendgrid,
  };
  return email => providers[provider](email);
};

module.exports = factory;
