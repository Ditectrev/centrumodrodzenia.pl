var gulp = require('gulp');

// Include plugins.
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var minifyHTML = require('gulp-htmlmin');

var reload = browserSync.reload;

// Reload browser on changes in development mode.
gulp.task('serve-dev', function () {
  browserSync.init({
    server: './app'
  });

  gulp.watch('./app/scss/*.scss', ['sass']);
  gulp.watch('./app/js/main.js', ['jshint']);
  gulp.watch('./app/*.html').on('change', reload);
  gulp.watch('./app/scss/*.scss').on('change', reload);
  gulp.watch('./app/js/main.js').on('change', reload);
});

// Compile SCSS to CSS.
gulp.task('sass', function() {
  gulp.src('./app/scss/**/*.scss')
    .pipe(sass({"bundleExec": true}))
    .pipe(gulp.dest('./app/css'))
});

// Use JSHint.
gulp.task('jshint', function() {
  gulp.src('./app/js/main.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Minify HTML.
gulp.task('minify-html', function() {
  return gulp.src('app/*.html')
    .pipe(minifyHTML({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('dist'));
});

// Copy JavaScript.
gulp.task('copy-javascript', function () {
  gulp.src('./app/js/*.js')
    .pipe(gulp.dest('./dist/js'));
});

// Copy PHP.
gulp.task('copy-php', function () {
  gulp.src('./app/php/*.php')
    .pipe(gulp.dest('./dist/php'));
});

// Copy fonts into destination directory.
gulp.task('copy-fonts', function () {
  gulp.src('./app/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'));
});

// Copy others files into destination directory.
gulp.task('copy-others', function () {
  gulp.src(['./app/karta.pdf', './app/.htaccess', './app/favicon.ico'])
    .pipe(gulp.dest('./dist'));
});

// Minify CSS code.
gulp.task('minify-css', function() {
  gulp.src('./app/css/*.css')
    .pipe(minifyCSS({keepBreaks: true}))
    .pipe(gulp.dest('./dist/css'))
});

// Uglify JavaScript code.
gulp.task('compress', function() {
  return gulp.src('./app/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
});

// Concat JavaScript code.
gulp.task('concat', function () {
  return gulp.src('./app/js/*.js')
    .pipe(concat('all.min.js', {newLine: ';'}))
    .pipe(gulp.dest('./dist/js'));
});

// Minify images.
gulp.task('compress-images', function() {
  return gulp.src(['./app/images/*.jpg', './app/images/*.png']) // source in pre-images folder, match all images
    .pipe(imagemin({ optimizationLevel: 7 }))
    .pipe(gulp.dest('./dist/images'));
});

// Reload browser on changes in distribution mode.
gulp.task('serve-dist', [], function () {
  browserSync.init({
    server: './dist'
  });
});

gulp.task('default', ['serve-dev']); // Default task.
gulp.task('dist', ['minify-html', 'copy-javascript', 'copy-php','copy-fonts', 'copy-others', 'copy-javascript', 'minify-css', 'compress-images']); // Distribution tasks.
