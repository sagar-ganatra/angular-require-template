'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    wrench = require('wrench'),
    runSequence = require('run-sequence');

wrench.readdirSyncRecursive('./gulp').filter(function (file) {
    return (/\.js$/i).test(file);
}).map(function (file) {
    require('./gulp/' + file)();
});

gulp.task('default', function () {
    gulp.start('build');
});
