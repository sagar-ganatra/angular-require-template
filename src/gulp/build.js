'use strict';

var gulp = require('gulp'),
    rev = require('gulp-rev'),
    del = require('del'),
    templateCache = require('gulp-angular-templatecache'),
    runSequence = require('run-sequence');
    
    
module.exports = function (exports) {
   

    gulp.task('clean', function () {
        return del(['dist']);
    });

    gulp.task('templating', function () {
        return gulp.src('app/**/*.html')
            .pipe(templateCache({
                root: 'dist',
                module: 'playersApp'
            }))
            .pipe(gulp.dest('dist/js'));
    });

    gulp.task('rev', function () {

        return gulp.src(['dist/js/main-bundle.js', 'dist/css/app.min.css', 'dist/js/require.js', 'dist/js/templates.js'], {
                base: 'dist'
                })
                .pipe(gulp.dest('dist'))
                .pipe(rev())
                .pipe(gulp.dest('dist'))
                .pipe(rev.manifest())
                .pipe(gulp.dest('dist'));
    });

    gulp.task('build', function () {
        runSequence(['clean', 'jshint'],
                    'styles',
                    'annotate',
                    'excludeMockFiles',
                    'copyRequireJS',
                    'scripts',
                    'minifyHTML',
                    'rev',
                    'htmlreplace',
                    'copyFonts',
                    'imageMin',
                    'war');
                    
                    
    });
    
    gulp.task('build:mock', function () {
        runSequence(['clean', 'jshint'],
                    'styles',
                    'annotate',
                    //'excludeMockFiles',
                    'copyRequireJS',
                    'scripts',
                    'minifyHTML',
                    'rev',
                    'htmlreplace',
                    'copyFonts',
                    'imageMin',
                    'war');
                    
                    
    });
    
};
