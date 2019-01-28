const env = process.env;

const sendgrid = {
  url: env.SENDGRID_URL,
  credential: env.SENDGRID_CREDENTIAL,
  contentType: env.SENDGRID_CONTENTTYPE,
};

module.exports = sendgrid;
