'use strict';

var app = angular.module('AdaptiveTesterApp');

var QuestionController = function (questionService) {
    var _this = this;

    questionService.getAllQuestions().success(function (questions) {
        _this.questions = questions;
    });
};



QuestionController.$inject = ['questionService'];

app.controller('QuestionController', QuestionController);
