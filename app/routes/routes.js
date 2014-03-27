'use strict';

module.exports = function (app) {
    var index = require('../../app/controllers/index');

    // TODO: Investigate using a Router object to handle all api routes.
    // Question API Routes.
    var questions = require('../../app/controllers/questions');
    var questionRoute = app.route('/api/questions');
    questionRoute.get(questions.list);
    questionRoute.post(questions.create);


    // Catch all
    app.get('*', index.index);
}
