var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint');

gulp.task('styles', function() {
    return sass('styles/app.scss', { style: 'expanded' })
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('css'));
});


gulp.task('jshint', function() {
    return gulp.src('app/**/*.js')
           .pipe(jshint())
           .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    gulp.watch('styles/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'jshint'], function() {

});