const { sendgrid: env } = require('../env');
const { toObjectArray } = require('../../utils/helper');

const validateSchema = require('../../utils/validate');
const { sendgrid: schema } = require('./schema');

const sendgrid = (email) => {
  const cc = toObjectArray(email.cc);
  const bcc = toObjectArray(email.bcc);

  const body = {
    personalizations: [{
      to: toObjectArray(email.recipients),
      subject: email.subject,
    }],
    from: {
      email: email.sender,
    },
    content: [{
      type: 'text/plain',
      value: email.contents,
    }],
  };
  if (cc && cc.length) {
    body.personalizations[0].cc = cc;
  }

  if (bcc && bcc.length) {
    body.personalizations[0].bcc = bcc;
  }

  const dataToSend = {
    url: env.url,
    headers: {
      'Content-Type': env.contentType,
      Authorization: `Bearer ${env.credential}`,
    },
    data: JSON.stringify(body),
  };
  validateSchema.setSchema(schema)(body);
  return action => ({ send: action(dataToSend) });
};

module.exports = sendgrid;
