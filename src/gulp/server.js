'use strict';

var gulp = require('gulp'),
    serve = require('gulp-serve');

module.exports = function (options) {

    
    gulp.task('serve', serve({
        root: [__dirname + '/../'],
        port: 5000
    }));
    
    gulp.task('serveBuild', serve({
        root: [__dirname + '/../../public'],
        port: 3000
    }));

};
