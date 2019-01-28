const CustomError = require('./custom-error');

describe('CustomError Class', () => {
  test('should return UNAUTHENTICATED when code 401 is set', () => {
    const options = {
      code: 401,
    };
    const error = new CustomError(options);
    expect(error.code).toBe(401);
    expect(error.status).toBe('UNAUTHENTICATED');
  });

  test('should return default 500 code when arbitrary code is set', () => {
    const options = {
      code: 700,
    };
    const error = new CustomError(options);
    expect(error.code).toBe(500);
    expect(error.status).toBe('INTERNAL');
  });
});
