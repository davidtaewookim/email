jest.mock('celebrate');
const celebrate = require('celebrate');

const CustomError = require('./custom-error');

const handler = require('./error-handler-middleware');

describe('error-handler-middleware', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('should response with CustomError instance when http error is returned', () => {
    const httpError = {
      statusCode: 500,
      name: 'dummy-error-name',
      message: 'dummy-error-message',
    };

    const options = { code: 500, details: [{ key: 'dummy-error-name', value: 'dummy-error-message' }] };
    const expectedCustomError = new CustomError(options);

    const send = jest.fn().mockReturnValue('1');
    const res = {
      status: jest.fn().mockReturnValue({ send }),
    };

    handler(httpError, {}, res, {});
    expect(send).toHaveBeenCalledWith(expectedCustomError);
  });

  test('should response with CustomError instance when validation error is returned', () => {
    const err = {
      details: 'validation error',
    };

    const options = { code: 400, details: 'validation error' };
    const expectedCustomError = new CustomError(options);

    celebrate.isCelebrate.mockReturnValue(true);
    const send = jest.fn().mockReturnValue('1');
    const res = {
      status: jest.fn().mockReturnValue({ send }),
    };

    handler(err, {}, res, {});
    expect(send).toHaveBeenCalledWith(expectedCustomError);
  });

  test('should return CustomError instance when CustomError is returned', () => {
    const expectedCustomError = new CustomError({ code: 504 });
    celebrate.isCelebrate.mockReturnValue(false);

    const send = jest.fn().mockReturnValue('1');
    const res = {
      status: jest.fn().mockReturnValue({ send }),
    };

    handler(expectedCustomError, {}, res, {});
    expect(send).toHaveBeenCalledWith(expectedCustomError);
  });
});
