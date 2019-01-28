const CustomResponse = require('./custom-response');

describe('CustomResponse Class', () => {
  test('should return 200 code when 200 is set', () => {
    const options = {
      code: 200,
      status: 'OK',
    };
    const res = new CustomResponse(options);
    expect(res.code).toBe(200);
    expect(res.status).toBe('OK');
  });
  test('should return 200 code when 202 is set', () => {
    const options = {
      code: 202,
    };
    const res = new CustomResponse(options);
    expect(res.code).toBe(200);
    expect(res.status).toBe('OK');
  });
});
