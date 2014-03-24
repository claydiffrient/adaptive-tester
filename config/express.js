'use strict';
/**
 * The configuration needed for the express server.
 */

var express = require('express');
var config = require('./config');
var path = require('path');

console.log(config);

// Get the question model.
require(config.root + '/app/models/question');

module.exports = function (db) {
    var app = express();

    app.configure('development', function () {
        app.use(express.logger('dev'));
        app.set('view cache', false);
    });

    app.use(express.urlencoded());
    app.use(express.json());
    app.use(express.methodOverride());

    app.enable('jsonp callback');

    app.use(app.router);

    return app;

}
