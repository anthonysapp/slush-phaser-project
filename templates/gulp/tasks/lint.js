var gulp   = require('gulp'),
    jshint = require('gulp-jshint');


gulp.task('lint', function () {
    return gulp.src([ paths['scripts'] ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .on('error', function () {
            console.warn('Error: JSHint encountered an error');
        });
});
