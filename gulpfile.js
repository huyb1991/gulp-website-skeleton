'use strict';

var gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    sass      = require('gulp-sass'),
    cleanCSS  = require('gulp-clean-css'),
    uglify    = require('gulp-uglify'),
    concat    = require('gulp-concat'),
    jade      = require('gulp-jade');


// Server task
gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true
  });
});

// Live-reload for HTML
gulp.task('html', function () {
  return gulp.src('./src/*.html')
    .pipe(connect.reload());
});

// Compile sass
gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/sass'));
});

// Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('./src/sass/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./src'));
  
});

// Minify JS
gulp.task('minify-js', function() {
  // Minify JS
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./src/js/min'));
  
});

// Compress JS
gulp.task('compress-js', function() {
  // Compress JS to main.js
  return gulp.src('./src/js/min/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./src'));
});

// Compile Jade template to HTML
gulp.task('compile-jade', function() {
  return gulp.src('./src/jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./src/statics'));
});

// Watch;
gulp.task('watch', function () {
  gulp.watch(['./src/*.html'], ['html']);
  gulp.watch(['./src/sass/**/*.scss'], ['sass']);
  gulp.watch(['./src/sass/*.css'], ['minify-css']);
  gulp.watch(['./src/js/*.js'], ['minify-js']);
  gulp.watch(['./src/js/min/*.js'], ['compress-js']);
  gulp.watch(['./src/jade/*.jade'], ['compile-jade']);
});

gulp.task('default', ['connect', 'watch']);