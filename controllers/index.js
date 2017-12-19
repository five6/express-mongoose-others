const fs = require('fs');
const chalk = require('chalk');
fs.readdirSync(__dirname).forEach(function(name){
    if (fs.statSync(__dirname + '/' + name).isDirectory()){
        console.log(chalk.green('required controller ' + name));
        require('./' + name);
    }
});