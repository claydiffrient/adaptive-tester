'use strict';

var path = require('path');

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    express: {
        options: {
            // Replace defaults if needed here.
        },
        dev: {
            options: {
                script: './server.js'
            }
        }
    },
    watch: {
        express: {
            files: ['/app/**/*.js', '/app/views/**/*', '/config/**/*.js'],
            tasks: ['express:dev'],
            options: {
                spawn: false
            }
        }
    }
  });

  grunt.registerTask('server', function (target) {
    grunt.task.run([
        'express:dev',
        'watch'
    ]);
  });
};
