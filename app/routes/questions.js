'use strict';

// var express = require('express');

module.exports = function (app) {
    var questions = require('../../app/controllers/questions');

    // var router = express.Router();
    var router = app.route('/api/questions');
    // app.use('/questions', router);


    router.get(questions.list);
    router.post(questions.create);

}
