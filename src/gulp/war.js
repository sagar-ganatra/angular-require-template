'use strict';

var gulp = require('gulp'),
    war = require('gulp-war'),
    zip = require('gulp-zip');

module.exports = function (options) {

    return gulp.task('war', function() {
            gulp.src('dist/**/*.*')
                .pipe(war({
                    welcome: 'index.html',
                    displayName: 'Gulp WAR' 
                }))
                .pipe(zip('app.war'))
                .pipe(gulp.dest('./build'));
        });
};