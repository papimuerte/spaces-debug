const express = require('express');
const router = express.Router();

const listFilesV2 = require('./aws/v2');
const listFilesV3 = require('./aws/v3');

router.post('/v2', async function (req, res) {
  try {
    const files = await listFilesV2();
    res.status(200).json(files);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/v3', async function (req, res) {
  try {
    const files = await listFilesV3();
    res.status(200).json(files);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
