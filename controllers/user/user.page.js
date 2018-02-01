var express = require('express');
var router = express.Router();
var middleware = require('../_filters/auth');
router.get('/signup', signUp);
router.get('/signin', signIn);
router.get('/profile', middleware.auth, middleware.menu, profile)

function signUp(req, res, next) {
    res.render('user/signup');
}
function signIn(req, res, next) {
    res.render('user/signin');
}
function profile(req, res, next) {
    res.render('user/profile');
}
$app.use('/user', router);