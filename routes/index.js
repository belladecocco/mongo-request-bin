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
  const qry = webhookModel.find({}).sort({_id: -1});
  qry.exec(function(err, result){
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

router.post('/reset', async function(req,res,next){
  if(req.body.password === 'yesreset'){
    try{
      await webhookModel.remove({});
      return res.send('Success');
    }catch(err){
      return next(err);
    }
  }
  return res.send('Failue');
});

module.exports = router;
