var express = require('express');
var router = express.Router();
var middleware = require('../_filters/auth');

function home(req, res, next){
    res.body = [];
}
router.get('/', function(req, res, next) {
});

$app.use('/home/api', router);
