'use strict';

var app = app || {};

app.index = function (request, response) {
    response.render('index.html');
};

module.exports = app;
