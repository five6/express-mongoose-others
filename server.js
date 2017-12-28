var express = require('express');
var logger = require('morgan');
var path = require('path');
var chalk = require('chalk');
var favicon = require('serve-favicon');
// middlewares
var compression = require('compression');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
var session = require('express-session');
var errorhandler = require('errorhandler');
var notifier = require('node-notifier');
var timeout = require('connect-timeout');
var vhost = require('vhost');
var MongoStore = require('connect-mongo')(session);
// var cookieSession = require('cookie-session'); 
var mongoose = require('mongoose');
global.$app = new express();
var app = $app;

var KEY_SESSION_ID = "_s";
const port = process.env.PORT || 3000;

//confifg
const node_env = process.env.NODE_ENV  || 'development';
global.$config = require(`./config/${node_env}`);
require('./common/helper');
require('./common/sys');
// var index = require('./routes/index');
// var users = require('./routes/users');

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
// uncomment after placing your favicon in /public
express.static.mime.define({'application/font-woff': ['woff']});
app.use(express.static('./public', { maxAge: 1000 * 60 * 60 * 24}));
require('./assets');
app.use(logger('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(lessMiddleware(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'public')));
// add vhost routing to main app for mail
// app.use(vhost('www.666666.com', app))



app.use(timeout(10 * 60 * 1000))
app.use(session({
    keys: KEY_SESSION_ID,
      // store: new RedisStore({ 'url' : $config.sessen_store_url }),
    store: new MongoStore({ 'url' : $config.mongodb.url }), 
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    //cookie: { maxAge: 60000 }
}));

app.use(function (req, res, next) {
    if (req.cookies) return next();
    if (req.query[KEY_SESSION_ID]) {
        req.cookies = {};
        req.signedCookies = {};
        req.cookies[KEY_SESSION_ID] = req.query[KEY_SESSION_ID];
    }
    next();
});


// router 在 session之后定义
require('./models');
require('./controllers');


app.use(function(err, req, res, next){
    if (req.xhr) {
        res.status(500).json({error : JSON.stringify(err)});
    } else {
        if("development" === process.env.NODE_ENV){
            res.locals.error_message = err.message;
            res.locals.error_stack = err.stack;
        }else {
            res.locals.error_message = "Something went wrong!";
        }
        res.status(500).render('error500');
    }
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    if(req.xhr) {
        res.status(404).json({error : "api not found!"});
    } else {
        res.render('error404');
    }
});


function connect () {
    mongoose.connect($config.mongodb.url, $config.mongodb.options);
    return mongoose.connection;
}
connect()
    .on('error', function () {
        console.error(
            chalk.red('Error in MongoDb connection: ' + error)
        )
    })
    .on('disconnected', connect)
    .once('open',listen);

function listen () {
    app.listen(port, (err) => {
        if(err) {
            console.log(chalk.red(err));
        }
    });
    console.log(chalk.green('连接数据库成功'));
    console.log('app started on port ' + port);
    //添加model
    
}


