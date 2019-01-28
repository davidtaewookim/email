jest.mock('../env', () => ({ sendgrid: { sender: 'some-sender', url: 'some-url', contentType: 'some-content-type', credential: 'some-credential' } }));

const sendgrid = require('./sendgrid');

describe('sendgrid email data', () => {
  test('should return sendgrid email data object', () => {
    const request = {
      sender: 'sender@test.com',
      recipients: ['1@test.com', '2@test.com'],
      subject: 'test subject',
    };
    const send = jest.fn();
    sendgrid(request)(send);
    expect(send).toHaveBeenCalledWith(expect.objectContaining({ url: 'some-url' }));
  });
  test('should return sendgrid email data object with cc & bcc', () => {
    const request = {
      sender: 'sender@test.com',
      recipients: ['1@test.com', '2@test.com'],
      subject: 'test subject',
      cc: ['1@test.com', '2@test.com'],
      bcc: ['1@test.com', '2@test.com'],
    };
    const send = jest.fn();
    sendgrid(request)(send);
    expect(send).toHaveBeenCalledWith(expect.objectContaining({ url: 'some-url' }));
  });
});
