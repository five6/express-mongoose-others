'use strict';

var express = require('express');
var router = express.Router();
var middleware = require('../_filters/auth');
router.get('/', middleware.auth, middleware.menu, blogs);
router.get('/create', middleware.auth, middleware.menu, create);
router.get('/:_id', middleware.auth, middleware.menu, detail);
function blogs(req, res, next) {
    $logger.info('访问blog主页');
    res.render('blogs/index');
}

function create(req, res, next) {
    res.render('blogs/create');
}

function detail(req, res, next) {
    res.render('blogs/detail');
}

$app.use('/blogs', router);