/**
 * This file contains the definition for the Question database object.
 */

'use strict';

/**
 * Module dependencies
 */
var _ = require('lodash');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Question Schema
 */
var QuestionSchema = new Schema({
    // The actual text of the question
    text: {
        type: String,
        required: true,
        trim: true
    },
    // Array of answers to the question.
    answers: {
        type: [{text: String, correct: Boolean}],
        required: true
    },
    // The difficulty of the question
    difficulty: {
        type: Number,
        required: true
    },
    // The number of times the question has been asked
    asked: {
        type: Number,
        default: 0
    },
    // The number of times the question has been answered correctly
    correct: {
        type: Number,
        default: 0
    },
    // The date this question was created (for auditing)
    created: {
        type: Date,
        default: Date.now
    }
});

//////////////////////////////////////////////////////////////////////////////
// Validations
//////////////////////////////////////////////////////////////////////////////

/**
 * Makes sure that only one answer is a correct answer.
 */
QuestionSchema.path('answers').validate(function (answers) {
    var count = 0;
    _.each(answers, function (answer) {
        if (answer.correct) {
            count++;
        }
    });
    // If the count is more than 1 return false;
    return !(count > 1);
});


//////////////////////////////////////////////////////////////////////////////
// Nice virtual properties, won't be persisted.
//////////////////////////////////////////////////////////////////////////////

/**
 * Returns the number of incorrect responses to a question
 */
QuestionSchema.virtual('incorrect').get(function () {
    return this.asked - this.correct;
});

// Register a mongoose model based on the QuestionSchema
var Question = mongoose.model('Question', QuestionSchema);

// Exported so that it can work in jasmine-node testing.
module.exports = Question;
