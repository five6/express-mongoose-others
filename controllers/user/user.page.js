var express = require('express');
var app = $app;
var router = express.Router();
var middleware = require('../_filters/auth');
router.get('/signup', signUp);
router.get('/signin', signIn);

function signUp(req, res, next){
    res.render('user/signup');
}
function signIn(req, res, next){
    res.render('user/signin');
}
$app.use('/user', router);