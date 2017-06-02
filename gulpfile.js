var gulp = require('gulp');

// include plugins.
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var reload = browserSync.reload;

var SRC = './app/js/*.js'; // source will be all .js files
var DEST = './dist/js'; // destitation of .js files

// Concat JavaScript code.
gulp.task('concat', function () {
  return gulp.src('./app/js/*.js')
  // return gulp.src(['./app/js/one.js, ./app/js/two.js'])
    .pipe(concat('all.js', {newLine: ';'}))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('serve', ['sass', 'minify-css'], function () {
  browserSync.init({
    server: './dist'
  });

  gulp.watch('./app/scss/*.scss', ['sass']);
  gulp.watch('./app/css/*.css', ['minify-css']);
  gulp.watch('./app/scss/*.scss').on('change', reload);
  gulp.watch('./app/css/*.css').on('change', reload);
});

// Compile SCSS to CSS.
gulp.task('sass', function() {
  gulp.src('./app/scss/**/*.scss')
  .pipe(sass({"bundleExec": true}))
  .pipe(gulp.dest('./dist/css'))
});

// Uglify JavaScript code.
gulp.task('compress', function() {
  return gulp.src('./app/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'))
});

// Minify images.
gulp.task('compress-images', function() {
  return gulp.src('./app/images/*') // source in pre-images folder, match all images
  .pipe(imagemin({ optimizationLevel: 7 }))
  .pipe(gulp.dest('./dist/images'));
});

// gulp.task('default', function() {
//   gulp.src('./app/js/main.js')
//   .pipe(jshint())
//   .pipe(jshint.reporter('default'));
// });

// Move changed files.
gulp.task('changed', function() {
  return gulp.src(SRC)
  .pipe(plumber())
  .pipe(changed(DEST))
  .pipe(gulp.dest(DEST));
});

// Use JSHint.
gulp.task('jshint', function() {
  gulp.src('./app/js/main.js')
  .pipe(plumber())
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// Minifiy CSS.
gulp.task('minify-css', function() {
  gulp.src('./app/css/**/*.css')
  .pipe(minifyCSS({keepBreaks: true}))
  .pipe(gulp.dest('./dist/css'))
});

// Watch for changes.
gulp.task('watch', function() {
  gulp.watch(SRC, ['minify-css']);
});

gulp.task('default', ['serve']); // might be an array

// gulp.task('one', function() {
//
// });
//
// gulp.task('two', ['one'], function() {
//
// });
//
// gulp.task('three', ['two'], function() {
//
// });

// gulp.task('default', ['one', 'two', 'three']);

// gulp.task('default', ['one', 'three', 'two']);

// gulp.task('default', ['three', 'two', 'one']);
