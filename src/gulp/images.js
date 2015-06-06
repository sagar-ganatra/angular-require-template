'use strict';

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

module.exports = function (options) {

    gulp.task('imageMin', function () {
        return gulp.src('app/images/*.*')
                   .pipe(imagemin({
                        progressive: true
                    }))
                    .pipe(gulp.dest('dist/images'));
    });
    
};
