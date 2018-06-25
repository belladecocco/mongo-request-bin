'use strict';
const express = require('express');
const router = express.Router();

const webhookModel = require('../models/webhooks');

router.get('/', function(req,res,next){
  return res.json({
    running: true
  });
});

router.post('/webhooks', function(req, res, next) {
  let obj = {};

  webhookModel.create({body: req.body}, function(err){
    if(err){
      return next(new Error('cannot write webhook to database'));
    }
    return res.send('Success');
  });
});

router.get('/webhooks', function(req,res,next){
  webhookModel.find({}, function(err, result){
    if(err){
      return next(err);
    }
    return res.json(result);
  });
});

router.get('/webhooks/:id', function(req,res,next){
  webhookModel.findOne({_id: req.params.id}, function(err, result){
    if(err){
      return next(err);
    }
    return res.json(result);
  });
});

module.exports = router;
