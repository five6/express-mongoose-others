'use strict';
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const _ = require('lodash');
fs.readdirSync(__dirname).forEach(function(name){
    if(['index.js'].indexOf(name) == -1){
        require('./' + name);
    }
});