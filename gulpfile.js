'use strict';

var gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    sass      = require('gulp-sass'),
    cleanCSS  = require('gulp-clean-css'),
    uglify    = require('gulp-uglify');


// Server task
gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true
  });
});

// Live-reload for HTML
gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(connect.reload());
});

// Compile sass
gulp.task('sass', function() {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/sass'));
});

// Minify CSS
gulp.task('minify-css', function() {
  gulp.src('./src/sass/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./src'));
  
});

// Minify JS
gulp.task('minify-js', function() {
  gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./src'));
});

// Watch;
gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['html']);
  gulp.watch(['./src/sass/**/*.scss'], ['sass']);
  gulp.watch(['./src/sass/*.css'], ['minify-css']);
  gulp.watch(['./src/js/*.js'], ['minify-js']);
});

gulp.task('default', ['connect', 'watch']);