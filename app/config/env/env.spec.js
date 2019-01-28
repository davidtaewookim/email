process.env.MAILGUN_URL = 'https://api.mailgun.net/v3/domain.mailgun.org/messages';
process.env.MAILGUN_SENDER = 'test@sender.com';
process.env.MAILGUN_CREDENTIAL = 'some-api-key';
process.env.MAILGUN_CONTENTTYPE = 'application/x-www-form-urlencoded';
process.env.SENDGRID_URL = 'https://api.sendgrid.com/v3/mail/send';
process.env.SENDGRID_CREDENTIAL = 'some-credential-key';
process.env.SENDGRID_CONTENTTYPE = 'application/json';

const mailgun = require('./mailgun');
const sendgrid = require('./sendgrid');

describe('mailgun env', () => {
  test('should contain url from environment variable', () => {
    expect(mailgun).toMatchObject({ url: 'https://api.mailgun.net/v3/domain.mailgun.org/messages' });
  });
});

describe('sendgrid env', () => {
  test('should contain url from environment variable', () => {
    expect(sendgrid).toMatchObject({ url: 'https://api.sendgrid.com/v3/mail/send' });
  });
});
