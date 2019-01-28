const handler = require('./not-found-handler');

describe('notFoundHandler', () => {
  test('should call next with CustomError 404 code', () => {
    const next = jest.fn();
    handler({}, {}, next);
    expect(next).toHaveBeenCalledWith(expect.objectContaining({ code: 404 }));
  });
});
