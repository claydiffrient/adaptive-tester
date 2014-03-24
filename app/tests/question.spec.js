/**
 * Tests for the Question model.
 */

'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose');
var Question = require('../models/question');

var question; // Global

describe('<Unit Test>', function () {
    describe('The question model', function () {
        beforeEach(function () {
            question = new Question({
                text: 'Why is this test question being asked?',
                answers: [{
                    text: 'It is a test.',
                    correct: true
                },{
                    text: 'Because you\'re silly',
                    correct: false
                },{
                    text: '9',
                    correct: false
                }, {
                    text: 'Another test answer',
                    correct: false
                }],
                difficulty: 1
            });
        });

        describe('The save method', function () {
            it('should be able to save without problems', function () {
                return question.save(function (err) {
                    expect(err).toBeUndefined();
                });
            });

            it('should fail if more than one answer is correct', function () {
                question.answers[1].correct = true;
                question.save(function (err) {
                    expect(err).toBeDefined();
                });
            });
        });



    });
});
