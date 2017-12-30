'use strict';

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ dirname: $config.LOG_DIR, filename: 'error.log', level: 'error' }),
    new winston.transports.File({ dirname: $config.LOG_DIR, filename: 'info.log', level: 'info' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

global.$logger = logger;