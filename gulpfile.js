const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');

// Compile SCSS to CSS
gulp.task('sass', () => {
    return gulp.src('src/style/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/style'));
});

// Concatenate and minify CSS
gulp.task('css', () => {
    return gulp.src('dist/style/*.css')
        .pipe(concat('styles.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/style'));
});

// Optimize images
gulp.task('imagemin', () => {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Concatenate and minify JS
gulp.task('js', () => {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Clean dist directory
gulp.task('clean', () => {
    return del(['dist']);
});

// Default task
gulp.task('default', gulp.series('clean', 'sass', 'css', 'js', 'imagemin'));