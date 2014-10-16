var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    concat     = require('gulp-concat'),
    uglify     = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('uglify', [ 'scripts' ], function () {
    return gulp.src([
            './bower_components/traceur-runtime/traceur-runtime.js',
            <% if (needPIXI) { %>'./bower_components/phaser-official/build/custom/pixi.js',<% } %>
            './bower_components/phaser-official/build/<%= phaserPath %>',
            <% _.forEach(externalLibs, function(lib) { %>'./bower_components/phaser-official/build/custom/<%- lib %>.js',<% }); %>
            './.tmp/game.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('game.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths['product']));
});
