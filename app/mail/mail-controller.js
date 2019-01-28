const { failover } = require('../utils/error');
const { CustomResponse } = require('../utils/response');

const factory = require('../config/provider');
const send = require('./mail-service');

const sendMail = async (req, res) => {
  const { body: email } = req;
  const mailerMailgun = factory('mailgun')(email)(send);
  const mailerSendgrid = factory('sendgrid')(email)(send);
  const sendAction = failover(mailerMailgun.send, mailerSendgrid.send);
  const result = await sendAction();
  const customResponse = new CustomResponse(result);
  res.json(customResponse);
};

module.exports = sendMail;
