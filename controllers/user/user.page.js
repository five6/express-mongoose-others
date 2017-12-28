var express = require('express');
var app = $app;
var router = express.Router();
var middleware = require('../_filters/auth');
router.get('/signup',middleware.auth, signUp);
router.get('/signin',middleware.auth, signIn);

function signUp(req, res, next){
    console.log('sign up')
    res.render('user/signup');
}
function signIn(req, res, next){
    console.log('sign in')
    res.render('user/signin');
}
$app.use('/user', router);