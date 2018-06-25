'use strict';
const express = require('express');
const router = express.Router();

const webhookModel = require('../models/webhooks');

router.post('/webhook', function(req, res, next) {
  let obj = {};

  webhookModel.create({body: req.body}, function(err){
    if(err){
      return next(new Error('cannot write webhook to database'));
    }
    return res.send('Success');
  });
});

module.exports = router;
