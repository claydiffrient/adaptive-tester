'use strict';

var app = angular.module('AdaptiveTesterApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/questions', {
        templateUrl: 'modules/questions/questions.html',
        controller: 'QuestionController',
        controllerAs: 'ctrl'
    });

    $locationProvider.html5Mode(true);
});
