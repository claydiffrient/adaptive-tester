'use strict';
/**
 * Utilities for use in the application
 */

var fs = require('fs');

/**
 * Walk the file structure
 * Source: https://github.com/meanjs/mean/blob/master/config/utilities.js
 */
exports.walk = function(root, includeRegex, excludeRegex, removePath) {
    var output = [];
    var directories = [];

    // First read through files
    fs.readdirSync(root).forEach(function(file) {
        var newPath = root + '/' + file;
        var stat = fs.statSync(newPath);

        if (stat.isFile()) {
            if (includeRegex.test(file) && (!excludeRegex || !excludeRegex.test(file))) {
                output.push(newPath.replace(removePath, ''));
            }
        } else if (stat.isDirectory()) {
            directories.push(newPath);
        }
    });

    // Then recursively add directories
    directories.forEach(function(directory) {
        output = output.concat(_walk(directory, includeRegex, excludeRegex, removePath));
    });

    return output;
};
