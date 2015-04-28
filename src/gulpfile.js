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
    amdOptimize = require('gulp-amd-optimizer'),
    ngAnnotate = require('gulp-ng-annotate'),
    rjs = require('requirejs'),
    wait = require('gulp-wait'),
    expect = require('gulp-expect-file'),
    q = require('q'),
    fs = require('fs'),
    templateCache = require('gulp-angular-templatecache'),
    runSequence = require('run-sequence'),
    minifyHTML = require('gulp-minify-html');



gulp.task('clean', function () {
    return del(['dist']);
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
        .pipe(gulp.dest('dist/css'));
});

gulp.task('ngAnnotate', function () {
    return gulp.src('app/**/*.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest('dist'));
});

gulp.task('templating', function () {
    return gulp.src('app/**/*.html')
        .pipe(templateCache({
            root: 'dist',
            module: 'playersApp',
            moduleSystem: 'RequireJS'
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('minifyHTML', function () {
    return gulp.src('app/**/*.html')
               .pipe(minifyHTML())
               .pipe(gulp.dest('dist'));
});

//used only in the build
gulp.task('compressjs', function() {
    
    rjs.optimize({
        baseUrl: './dist',
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
        if(fs.existsSync(cwd + '/dist/js/main-bundle.js')) {
            gulp.src(cwd + '/dist/js/main-bundle.js')//, cwd + '/dist/js/templates.js'])
                //.pipe(concat('main-bundle.js'))
                .pipe(gulp.dest('dist/js'));
            deferred.resolve();
        } else {
            deferred.reject();
        }
    }, 5000);
    return deferred.promise;
       
});

gulp.task('compresscss', ['styles'], function() {
    return gulp.src('css/app.min.css')
        .pipe(gulp.dest('dist/css'));
});

gulp.task('rev', function () {
    
    gulp.src('vendor/requirejs/require.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(wait(2000));
    
    return gulp.src(['dist/js/main-bundle.js', 'dist/css/app.min.css', 'dist/js/require.js', 'dist/js/templates.js'], {base: 'dist'})
        .pipe(gulp.dest('dist'))
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('dist'));
});

gulp.task('htmlreplace', function () {
    var manifest = require('./dist/rev-manifest.json');
    console.log(manifest);
    
    return gulp.src('app/index.html')
    .pipe(htmlreplace({
        css: manifest['css/app.min.css'],
        js: manifest['js/main-bundle.js'],
        requirejs: 'js/require.js'
    }))
    .pipe(gulp.dest('dist'));
    
});

gulp.task('jshint', function(done) {
    return gulp.src('app/**/*.js')
           .pipe(jshint())
           .pipe(jshint.reporter('default'));
    
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('styles/*.scss', ['styles']);
});

gulp.task('default', function() {
    runSequence('clean', 'jshint', 
                'compresscss', 'ngAnnotate', 'minifyHTML', 'compressjs', 'rev', 'htmlreplace');
});

gulp.task('serve', serve({
    root: [__dirname],
    port: 5000
}));