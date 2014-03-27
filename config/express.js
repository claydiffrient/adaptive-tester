'use strict';
/**
 * The configuration needed for the express server.
 */

var express = require('express');
var config = require('./config');
var path = require('path');
var utilities = require('./utilities');
var logger = require('morgan');
var bodyParser = require('body-parser');
var consolidate = require('consolidate');
var swig = require('swig');
var methodOverride = require('method-override');


module.exports = function (db) {
    var app = express();
    var env = process.env.NODE_ENV || 'development';

    //Get the models
    utilities.walk('./app/models', /(.*)\.(js$|coffee$)/).forEach(function(modelPath) {
        require(path.resolve(modelPath));
    });

    // Setup some local variables
    //
    app.locals.modulesJSFiles = utilities.walk('./public/modules', /(.*)\.(js)/, /(.*)\.(spec.js)/, './public');
    app.locals.modulesCSSFiles = utilities.walk('./public/modules', /(.*)\.(css)/, null, './public');


    if (env == 'development') {
        app.use(logger('dev'));
        app.set('view cache', false);
    }

    app.engine('html', consolidate[config.templateEngine]);
    app.set('view engine', 'html');
    app.set('views', config.root + '/app/views');

    app.use(bodyParser());
    app.use(methodOverride());

    app.enable('jsonp callback');

    app.use(express.static(config.root + '/public'));


    // Load Routes
    utilities.walk('./app/routes', /(.*)\.(js$|coffee$)/).forEach(function(routePath) {
        require(path.resolve(routePath))(app);
    });

    // Assume 'not found' in the error msgs is a 404. this is somewhat silly, but valid, you can do whatever you like, set properties, use instanceof etc.
        app.use(function(err, req, res, next) {
            // If the error object doesn't exists
            if (!err) return next();

            // Log it
            console.error(err.stack);

            // Error page
            res.status(500).render('500.html', {
                error: err.stack
            });
        });

        // Assume 404 since no middleware responded
        app.use(function(request, response) {
            response.status(404).render('404.html', {
                url: request.originalUrl,
                error: 'Not Found'
            });
        });

    return app;

}
