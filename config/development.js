'use strict';

var _ = require('lodash')
var BASE_URI = "localhost";
const parent = require('./common')
const config = {
    CONTROLLERS:['user/**','home/**','blogs/**'],
    mongodb:{
        url: 'mongodb://' + BASE_URI + '/demo',
        options:{
            useMongoClient: true,
            autoIndex: false, // Don't build indexes
            reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
            reconnectInterval: 500, // Reconnect every 500ms
            poolSize: 10, // Maintain up to 10 socket connections
            // If not connected, return errors immediately rather than waiting for reconnect
            bufferMaxEntries: 0
        }
    }
}
module.exports = _.defaults(config, parent)

