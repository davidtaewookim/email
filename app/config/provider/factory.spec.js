jest.mock('./mailgun', () => () => 'mailgun');
jest.mock('./sendgrid', () => () => 'sendgrid');
const factory = require('./factory');

describe('factory function to create email object for different provider', () => {
  test('should return mailgun when provider is \'mailgun\'', () => {
    const result = factory('mailgun')();
    expect(result).toBe('mailgun');
  });
});
