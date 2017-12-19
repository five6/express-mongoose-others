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
var RedisStore = require('connect-redis')(session);
var cookieSession = require('cookie-session');
var mongoose = require('mongoose');
var app = express();
global.$app = app;
var KEY_SESSION_ID = "_s";
const port = process.env.PORT || 3000;

//confifg
const node_env = process.env.NODE_ENV  || 'development';
global.$config = require(`./config/${node_env}`);
// require('./config/mongoose');

var index = require('./routes/index');
var users = require('./routes/users');

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



app.use('/', index);
app.use('/users', users);


app.use(function (req, res, next) {
    if (req.cookies) return next();
    if (req.query[KEY_SESSION_ID]) {
        req.cookies = {};
        req.signedCookies = {};
        req.cookies[KEY_SESSION_ID] = req.query[KEY_SESSION_ID];
    }
    next();
});

app.use(timeout(10 * 60 * 1000))
app.use(cookieSession({
    keys: KEY_SESSION_ID,
    store: new RedisStore({ 'url' : $config.session_store_url }),
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    //cookie: { maxAge: 60000 }
}));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
if (node_env === 'development') {
    // only use in development
    app.use(errorhandler({log: errorNotification}))
}


function errorNotification (err, str, req) {
    var title = 'Error in ' + req.method + ' ' + req.url
    notifier.notify({
        title: title,
        message: str
    })
}
module.exports = app;

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
    require('./models');
    require('./controllers');
}


