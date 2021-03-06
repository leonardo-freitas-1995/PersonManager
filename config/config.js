/* global require, __dirname */

var path = require('path');
var rootPath = path.normalize(__dirname + '/../');

module.exports = {
    development: {
        ip: "127.0.0.1",
        rootPath: rootPath,
        db: 'mongodb://127.0.0.1/personmanager',
        port: 3030,
        log: "dev"
    },
    production: {
        ip: "127.0.0.1",
        rootPath: rootPath,
        db: 'mongodb://127.0.0.1/personmanager',
        port: 80,
        log: "combined"
    }
};
