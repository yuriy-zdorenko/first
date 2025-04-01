import gulp from 'gulp';
import concat from 'gulp-concat';
import sass from 'gulp-sass';
import dartSass from 'sass';
import cssnano from 'gulp-cssnano';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import { deleteAsync } from 'del';

const sassCompiler = sass(dartSass);

// SCSS
gulp.task('scss', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist'));
});

// JS
gulp.task('scripts', () => {
  return gulp.src('./src/**/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('images', () => {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('clean', () => {
  return deleteAsync(['dist']);
});

gulp.task('default', gulp.series('clean', gulp.parallel('scss', 'scripts', 'images')));
