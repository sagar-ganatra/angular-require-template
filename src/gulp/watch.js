'use strict';

var gulp = require('gulp');

module.exports = function (options) {
    
    gulp.task('watch', function() {
        
        gulp.watch(['styles/*.scss', 'app/**/*.scss'], ['styles']);

        gulp.watch(['app/**/*.js', '!app/**/*spec/**', '!app/**/*spec.js'], ['jshint']);
            
    });
    
};
