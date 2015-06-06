'use strict';

var gulp = require('gulp'),
    wiredep = require('wiredep'),
    karma = require('karma').server,
    concat = require('concat-stream'),
    _ = require('lodash');

module.exports = function (options) {
    
    gulp.task('test', ['jshint'], function (done) {
        return    karma.start({
                configFile: __dirname + '/../karma.conf.js',
                singleRun: true
            });

    });
   
};