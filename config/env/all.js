'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../..');

module.exports = {
    app: {
        title: 'Adaptive Tester',
        description: 'An adaptive testing engine in JavaScript'
    },
    root: rootPath,
    port: process.env.PORT || 3000
}
