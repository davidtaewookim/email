const env = process.env;

const mailgun = {
  url: env.MAILGUN_URL,
  sender: env.MAILGUN_SENDER,
  credential: Buffer.from(env.MAILGUN_CREDENTIAL).toString('base64'),
  contentType: env.MAILGUN_CONTENTTYPE,
};

module.exports = mailgun;
