const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
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
        .pipe(gulp.dest('dist/style'))
        .pipe(browserSync.stream());
});

// Concatenate and minify CSS
gulp.task('css', () => {
    return gulp.src('dist/style/*.css')
        .pipe(concat('styles.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/style'))
        .pipe(browserSync.stream());
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
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

// Clean dist directory
gulp.task('clean', () => {
    return del(['dist']);
});

// Watch for changes and reload
gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: '.'
        }
    });

    gulp.watch('src/style/**/*.scss', gulp.series('sass', 'css')).on('change', browserSync.reload);
    gulp.watch('src/js/*.js', gulp.series('js')).on('change', browserSync.reload);
    gulp.watch('src/images/*', gulp.series('imagemin')).on('change', browserSync.reload);
    gulp.watch('*.html').on('change', browserSync.reload);
});

// Default task
gulp.task('default', gulp.series('clean', 'sass', 'css', 'js', 'imagemin', 'serve'));
