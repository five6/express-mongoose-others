'use strict';
var fs = require('fs');

if ($config.LOG_DIR && !fs.existsSync($config.LOG_DIR))
	fs.mkdirSync($config.LOG_DIR);

const winston = require('winston');
require('winston-daily-rotate-file');

var transport = new (winston.transports.DailyRotateFile)({
  dirname: $config.LOG_DIR,
  filename:'log',
  datePattern: 'yyyy-MM-dd.',
  prepend: true,
  level: process.env.ENV === 'development' ? 'debug' : 'info'
});

var logger = new (winston.Logger)({
  transports: [
    transport
  ]
});

global.$logger = logger;