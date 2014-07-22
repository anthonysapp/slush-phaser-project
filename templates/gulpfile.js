var gulp = require('gulp'),
  processhtml = require('gulp-processhtml'),
  jshint = require('gulp-jshint'),
  browserify = require('browserify'),
  imagemin = require('gulp-imagemin'),
  browserSync = require('browser-sync'),
  sass = require('gulp-sass'),
  source = require('vinyl-source-stream'),/*,
  streamify = require('gulp-streamify'),
  uglify = require('gulp-uglify')*/;

gulp.task('default', ['compile', 'watch', 'server']);

gulp.task('compile', ['scripts', 'styles', 'assets']);

gulp.task('scripts', ['script-compile']);

gulp.task('script-hints', function () {
  return gulp.src(['src/js/**/*.js', '!src/js/**/*_spec.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .on('error', function () {
      console.warn('Error: JSHint encountered an error');
    });
});

gulp.task('script-compile', ['script-hints'], function () {
  var bundleStream = browserify('./src/js/base.js').bundle();

  bundleStream
    .pipe(source('bundle.js'))
    /*.pipe(streamify(uglify()))*/
    .pipe(gulp.dest('bin/js'));
});

gulp.task('styles', function () {
  return gulp.src('src/scss/root.scss')
    .pipe(sass())
    .pipe(gulp.dest('bin/css'));
});

gulp.task('processhtml', function() {
  return gulp.src('src/index.html')
    .pipe(processhtml('index.html'))
    .pipe(gulp.dest('bin'));
})

gulp.task('assets', function () {
  return gulp.src(['src/assets/*.png', 'src/assets/*.jpg'])
    .pipe(imagemin())
    .pipe(gulp.dest('bin/assets'));
});

gulp.task('watch', ['watch-scripts', 'watch-html']);

gulp.task('watch-scripts', function () {
  return gulp.watch('src/js/**/*.js', function () {
    gulp.run('scripts');
  });
});

gulp.task('watch-html', function () {
  return gulp.watch('src/index.html', function () {
    gulp.run('processhtml');
  });
});

gulp.task('server', ['compile'], function () {
  return browserSync.init(['bin/js/*.js', 'bin/index.html'], {
    server: {
      baseDir: './bin'
    }
  });
});
