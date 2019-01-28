const axios = require('axios');
const service = require('./mail-service');
const { CustomError } = require('../utils/error');

jest.mock('axios');

describe('service layer', () => {
  test('should throw error when object doesn\'t match axios requirement', async () => {
    const data = {
      headers: {},
      data: 'some-string',
      url: 'some-url',
    };
    try {
      await service(data)();
    } catch (e) {
      expect(e.code).toBe(400);
      expect(e).toBeInstanceOf(CustomError);
    }
  });
  test('should call axios with headers, url, data property', async () => {
    const data = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'some-auth',
      },
      data: 'some-string',
      url: 'some-url',
    };
    await service(data)();
    expect(axios).toHaveBeenCalledWith(data);
  });
});
