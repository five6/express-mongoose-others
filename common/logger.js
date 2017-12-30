var pathLib = require('path')

var log4js = require("log4js");
log4js.configure({
    appenders: [
        { type: 'console' }, {
            type: 'dateFile',
            filename: $config.LOG_DIR,
            pattern: "_yyyy-MM-dd",
            maxLogSize: 1024,
            alwaysIncludePattern: false,
            backups: 4,
            category: 'logger'
        }
    ],
    replaceConsole: true
});

global.$logger = log4js.getLogger('logger');