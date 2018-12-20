'use strict';
const express = require('express');
const router = express.Router();

router.get('/', async function (req, res, next) {
    return res.json({
        running: true
    });
});

module.exports = router;
