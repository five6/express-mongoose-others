'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../_filters/auth');

router.get('/', middleware.auth, list);

function list(req, res, next) {
    res.body = [];
}
$app.use('/blogs/api', router);
