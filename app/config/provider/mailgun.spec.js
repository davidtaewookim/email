jest.mock('../env', () => ({ mailgun: { sender: 'some-sender', url: 'some-url', contentType: 'some-content-type', credential: 'some-credential' } }));

const mailgun = require('./mailgun');

describe('mailgun email data', () => {
  test('should return mailgun email data object', () => {
    const request = {
      recipients: ['1@test.com', '2@test.com'],
      subject: 'test subject',
    };
    const send = jest.fn();
    mailgun(request)(send);
    expect(send).toHaveBeenCalledWith(expect.objectContaining({ url: 'some-url' }));
  });
});
