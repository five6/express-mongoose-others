var express = require('express');
var router = express.Router();
var middleware = require('../_filters/auth');


router.get('/', middleware.auth, function (req, res, next) {
    res.body = [];
});

$app.use('/home/api', router);
