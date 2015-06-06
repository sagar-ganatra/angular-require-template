'use strict';

var gulp = require('gulp'),
    ngAnnotate = require('gulp-ng-annotate'),
    preprocess = require('gulp-preprocess'),
    jshint = require('gulp-jshint'),
    q = require('q'),
    fs = require('fs'),
    rjs = require('requirejs'),
    minimist = require('minimist');

module.exports = function (options) {
    
        gulp.task('jshint', function (done) {
        return gulp.src(['app/**/*.js', '!app/**/*spec/**', '!app/**/*spec.js'])
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });

    gulp.task('excludeMockFiles', function (context) {
        
        return gulp.src('app/app.js')
            .pipe(preprocess())
            .pipe(gulp.dest('./dist'));

    });

    gulp.task('annotate', function () {
        return gulp.src('app/**/*.js')
            .pipe(ngAnnotate())
            .pipe(gulp.dest('dist'));
    });

    gulp.task('copyRequireJS', function () {
        return gulp.src('bower_components/requirejs/require.js')
            .pipe(gulp.dest('dist/js'));

    });

    gulp.task('scripts', function () {

        rjs.optimize({
            baseUrl: 'dist',
            mainConfigFile: 'dist/main.js',
            keepBuildDir: true,
            optimize: 'none',
            inlineText: true,
            useStrict: true,
            out: 'dist/js/main-bundle.js',
            name: 'main'
        });


        var deferred = q.defer(),
            cwd = process.cwd(),
            count = 0;

        setTimeout(function () {
            if (fs.existsSync(cwd + '/dist/js/main-bundle.js')) {
                gulp.src(cwd + '/dist/js/main-bundle.js') //, cwd + '/dist/js/templates.js'])
                    .pipe(gulp.dest('dist/js'));
                deferred.resolve();
            } else {
                deferred.reject();
            }
        }, 5000);
        return deferred.promise;

    });
};
