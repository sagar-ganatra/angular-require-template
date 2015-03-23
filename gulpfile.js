var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rev = require('gulp-rev'),
    htmlreplace = require('gulp-html-replace'),
    del = require('del'),
    serve = require('gulp-serve'),
    livereload = require('gulp-livereload'),
    amdOptimize = require('gulp-amd-optimizer');

gulp.task('clean', function () {
    del(['dist']);
});

gulp.task('styles', function() {
    return sass('styles/app.scss', { style: 'expanded' })
        .on('error', function(err) {
            console.log(err);
            console.log(err.message);
        })
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

//used only in the build
gulp.task('compressjs', function() {
     //gulp.src('app/**/*.js')
     //    .pipe(concat('app.min.js'))
     //   .pipe(uglify())
     //    .pipe(gulp.dest('dist/js'))
    
    return gulp.src('app/main.js')
               .pipe(amdOptimize({
                    baseUrl: './app',
                    paths: {
                        angular: '../bower_components/angular/angular',
                        jquery: '../bower_components/jquery/dist/jquery',
                        uirouter: '../bower_components/angular-ui-router/release/angular-ui-router.min',
                        requireLib: '../vendor/requirejs/require'
                    },
                    mainConfigFile: 'main.js',
                    optimize: 'uglify2',
                    include: ['requireLib']
                    
                }))
                .pipe(concat('main-bundle.js'))
                .pipe(gulp.dest('dist/js'));
       
});

gulp.task('compresscss', ['styles'], function() {
     return gulp.src('css/app.min.css')
        .pipe(gulp.dest('dist/css'));
});

gulp.task('rev', ['compresscss', 'compressjs'], function () {
    return gulp.src(['dist/js/main-bundle.js', 'dist/css/app.min.css'], {base: 'dist'})
        .pipe(gulp.dest('dist'))
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('dist'));
});

gulp.task('htmlreplace', ['clean', 'rev'], function () {
    var manifest = require('./dist/rev-manifest.json');
    
    gulp.src('app/index.html')
    .pipe(htmlreplace({
        css: manifest['css/app.min.css'],
        js: manifest['js/main-bundle.js']
    }))
    .pipe(gulp.dest('dist'));
    
});

gulp.task('jshint', function() {
    return gulp.src('app/**/*.js')
           .pipe(jshint())
           .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('styles/*.scss', ['styles']);
});

gulp.task('default', ['jshint', 'htmlreplace'], function() {

});

gulp.task('serve', serve({
    root: [__dirname],
    port: 5000
}));