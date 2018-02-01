'use strict';

const fs = require('fs');
fs.readdirSync(__dirname).forEach(function(name){
    if(['index.js'].indexOf(name) == -1){
        require('./' + name);
    }
});