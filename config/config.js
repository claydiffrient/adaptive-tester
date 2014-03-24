'use strict';
/**
 * Handles merging the all environments configuration with that of the
 * particular environment
 */

var _ = require('lodash');

module.exports = _.merge(require(__dirname + '/../config/env/all.js'),
                         require(__dirname + '/../config/env/' + process.env.NODE_ENV + '.js') || {});
