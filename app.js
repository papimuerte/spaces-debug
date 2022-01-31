require('dotenv').config();
require('express-async-errors');
const express = require('express');
const router = require('./router');
const app = express();

const listFilesV2 = require('./aws/v2');
const listFilesV3 = require('./aws/v3');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/aws', router);

module.exports = app;
