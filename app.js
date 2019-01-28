const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const { errorHandler, notFoundHandler } = require('./app/utils/error');
require('dotenv').load({ path: '.env' });

const mail = require('./routes/mail');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/mail', mail);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
