var express = require('express');
var app = $app;
var router = express.Router();
var middleware = require('../_filters/auth');
router.get('/', middleware.auth, home);

function home(req, res, next){
    console.log('home');
    res.render('index');
}

$app.use('/', router);