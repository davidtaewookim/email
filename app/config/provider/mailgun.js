const querystring = require('querystring');
const { toString } = require('../../utils/helper');
const { mailgun: env } = require('../env');
const validateSchema = require('../../utils/validate');
const { mailgun: schema } = require('./schema');

const mailgun = (email) => {
  const body = {
    from: env.sender,
    to: toString(email.recipients),
    subject: email.subject,
    text: email.contents,
    cc: toString(email.cc),
    bcc: toString(email.bcc),
  };

  const cleansed = Object.keys(body).reduce((whole, current) => {
    if (body[current]) {
      return { ...whole, [current]: body[current] };
    }
    return { ...whole };
  }, {});

  const dataToSend = {
    url: env.url,
    headers: {
      'Content-Type': env.contentType,
      Authorization: `Basic ${env.credential}`,
    },
    data: querystring.stringify(cleansed),
  };
  validateSchema.setSchema(schema)(cleansed);
  return action => ({ send: action(dataToSend) });
};

module.exports = mailgun;
