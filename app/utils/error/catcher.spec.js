const catcher = require('./catcher');

describe('error catcher middleware', () => {
  test('should return promise when resoved', async () => {
    const promiseFunction = jest.fn();
    const fn = catcher(promiseFunction);
    await fn();
    expect(promiseFunction).toHaveBeenCalled();
  });
});
