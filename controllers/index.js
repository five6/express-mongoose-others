const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const _ = require('lodash');

if ($config.CONTROLLERS){
    _.each($config.CONTROLLERS, function(c){
        var files = $sys.globSync(__dirname + "/" + c);
        _.each(files, function(f){
            if (fs.statSync(f).isFile() &&
                path.extname(f) === '.js' &&
                path.basename(f).substring(0, 1) != '_'){
                require(f);
            }
        })
    })
} else {
    fs.readdirSync(__dirname).forEach(function(name){
        if (fs.statSync(__dirname + '/' + name).isDirectory()){
            require('./' + name);
        }
    });
}
