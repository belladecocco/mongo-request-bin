'use strict';
const express = require('express');
const router = express.Router();

const webhookModel = require('../models/webhooks');

router.get('/', async function (req, res, next) {
    let results;
    try {
        results = await webhookModel.discriminators('bucket');
    } catch (err) {
        return next(err);
    }
    return res.json(results);
});

router.post('/:bucket', async function (req, res, next) {
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

router.get('/:bucket/:id', async function (req, res, next) {
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

router.get('/:bucket', async function (req, res, next) {
    const qry = {
        bucket: req.params.bucket
    };
    let results = {};
    try {
        results = await webhookModel.find(qry);
    } catch (err) {
        return next(err);
    }
    return res.json(results);
});

module.exports = router;
