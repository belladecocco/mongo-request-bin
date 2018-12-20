'use strict';
const express = require('express');
const router = express.Router();

const webhookModel = require('../models/webhooks');

const RESET_PASSWORD = process.env.RESET_PASSWORD;

router.get('/', async function (req, res, next) {
  return res.json({
    running: true
  });
});

router.get('/webhooks/:bucket/:id', async function (req, res, next) {
  const qry = {
    _id: req.params.id,
    bucket: req.params.bucket
  };
  let results = {};
  try {
    results = await webhookModel.findOne(qry);
  } catch (err) {
    return next(err);
  }
  return res.json(results);
});

router.post('/webhooks/:bucket', async function (req, res, next) {
  let obj = {
    body: req.body,
    headers: req.headers
  };
  if (req.params.bucket) {
    obj.bucket = bucket;
  }
  try {
    await webhookModel.create(obj);
  } catch (err) {
    return next(err);
  }
  return res.send('Success');
});

router.get('/webhooks/:bucket', async function (req, res, next) {
  let results;
  let qry = {};
  if (req.params.bucket) {
    qry.bucket = req.params.bucket
  }
  try {
    results = await webhookModel.find(qry).sort({ _id: -1 });
  } catch (err) {
    return next(err);
  }
  return res.json(results);
});

router.post('/reset', async function (req, res, next) {
  if (req.body.password === RESET_PASSWORD) {
    try {
      await webhookModel.remove({});
      return res.send('Success');
    } catch (err) {
      return next(err);
    }
  }
  return res.send('Fa-eye-lure (Failure)');
});

module.exports = router;
