jest.mock('../utils/error');
jest.mock('../utils/response');
jest.mock('../config/provider', () => () => () => () => '');
jest.mock('./mail-service');

const { failover } = require('../utils/error');
const { CustomResponse } = require('../utils/response');

const controller = require('./mail-controller');

describe('controller layer', () => {
  test('should response with json object', async () => {
    const data = {
      sender: 'some-sender',
    };
    const res = {
      json: jest.fn(),
    };
    failover.mockImplementation(() => () => {});
    CustomResponse.mockImplementation(() => (data));

    await controller({}, res);

    expect(res.json).toHaveBeenCalledWith(data);
  });
});
