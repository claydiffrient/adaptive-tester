'use strict';

/**
 * Handles the starting of the Express server and application.
 */

// Handle the environment variable if need.
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Get dependencies for the module
var config = require('./config/config')
var mongoose = require('mongoose');

// Start the application
var db = mongoose.connect(config.db);
var app = require('./config/express')(db);
app.listen(config.port);

// Expose the application
module.exports = app;

// Log to the console that the server started.
console.log('Adaptive Tester started on port ' + config.port);
