'use strict';

var app = angular.module('AdaptiveTesterApp');

app.factory('questionService', ['$http', function ($http) {
    var service = {};

    service.getAllQuestions = function () {
        return $http.get('/api/questions')
    }

    return service;
}]);
