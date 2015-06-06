'use strict';

var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html'),
    htmlreplace = require('gulp-html-replace');

module.exports = function (options) {

    
    gulp.task('minifyHTML', function () {
        return gulp.src('app/**/*.html')
            .pipe(minifyHTML())
            .pipe(gulp.dest('dist'));
    });
    
    gulp.task('htmlreplace', function () {
        var manifest = require('../dist/rev-manifest.json');

        return gulp.src('app/index.html')
            .pipe(htmlreplace({
                css: manifest['css/app.min.css'],
                js: manifest['js/main-bundle.js'],
                requirejs: 'js/require.js'
            }))
            .pipe(gulp.dest('dist'));

    });
    
};