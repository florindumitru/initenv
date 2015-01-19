var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
// Basic usage
gulp.task('browserify', function() {
    // Single entry point to browserify
    gulp.src('src/main.js')
        .pipe(browserify())
        .pipe(rename('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
});

gulp.task('startServer', function() {
    browserSync({
        server: {
            baseDir: "./dist"
        }
    });
});
gulp.task('serv', ['browserify','startServer'], function () {
    gulp.watch("src/**/*.js", ['browserify', browserSync.reload]);
});
