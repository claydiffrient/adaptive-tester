'use strict';

/**
 * Contains all the application logic for questions.
 */
var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var _ = require('lodash');

// Create a "namespace" for this controller, export later.
var app = app || {};

app.create = function (request, response) {
    var question = new Question(request.body);
    question.save(function (err) {
        if (err) {
            return response.send({
                errors: err.errors
            });
        } else {
            response.jsonp(question);
        }
    });
};

app.list = function (request, response) {
    Question.find().sort('-created').exec(function (err, questions) {
        if (err) {
            response.render('error', {
                status: 500
            });
        } else {
            response.jsonp(questions);
        }
    });
};

// Export the controller
console.log(app);
module.exports = app;
console.log(exports);
