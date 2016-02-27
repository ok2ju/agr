var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var SASS_FILES = 'src/sass/**/*.scss';

gulp.task('sass', function() {
  return gulp.src(SASS_FILES)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 3 versions', 'ie 8', 'ie 9'],
        cascade: false
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

gulp.task('sass-watch', ['sass'], browserSync.reload);

gulp.task('serve', ['sass'], function() {
  browserSync.init({
      server: './src'
  });

  gulp.watch(SASS_FILES, ['sass-watch']);
  gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
