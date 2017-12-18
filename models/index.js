const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const models = path.join(__dirname, './models');
fs.readdirSync(models).filter(file => ~file.search(/^[^\.].*\.js$/)).forEach(file => {
    console.log(chalk.green('required model ' + file.substring(file.length -3,0)));
    require(path.join(models, file))
});
