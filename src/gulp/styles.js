'use strict';

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css');

module.exports = function (options) {
    
    gulp.task('copyFonts', function () {
        return gulp.src('bower_components/fonts/materialdesignicons-webfont.*')
                   .pipe(gulp.dest('dist/bower_components/fonts/'));

    });

    gulp.task('styles', function () {
        return sass('styles/app.scss', {
                style: 'expanded'
            })
            .on('error', function (err) {
                console.log(err);
                console.log(err.message);
            })
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
            .pipe(gulp.dest('css'))
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(minifycss())
            .pipe(gulp.dest('css'))
            .pipe(gulp.dest('dist/css'));
    });
};
