var express = require('express');
var router = express.Router();
var middleware = require('../_filters/auth');

function home(req, res, next){
    console.log('get home api');
    res.body = [];
}
router.get('/', function(req, res, next) {
    console.log('get home api');
});

$app.use('/home/api', router);
