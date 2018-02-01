var express = require('express');
var router = express.Router();
var middleware = require('../_filters/auth');
router.get('/', middleware.auth, middleware.menu, home);

function home(req, res, next){
    $logger.info('访问主页');
    res.render('index');
}

$app.use('/', router);