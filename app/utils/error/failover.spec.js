const failover = require('./failover');

describe('failover handler', () => {
  test('should call main & backup function when error was thrown', async () => {
    const main = jest.fn().mockRejectedValue('1');
    const backup = jest.fn().mockResolvedValue('1');

    const param = { test: 'parameter' };
    const run = failover(main, backup);
    await run(param);
    expect(main).toHaveBeenCalledWith(param);
    expect(backup).toHaveBeenCalledWith(param);
  });
});
