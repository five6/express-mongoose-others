'use strict';

var _ = require('lodash')
var BASEURI = "localhost"
var DB_URI = "mongodb://" + BASEURI + "/car";
const config = {
    mongodb: 'mongodb://' + BASEURI + '/demo',
    session_store_url: 'redis://localhost:6379' 
}

module.exports = config;
