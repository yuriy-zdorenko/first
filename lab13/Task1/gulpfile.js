// Імпорт необхідних модулів
const gulp = require('gulp');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Завдання для компіляції SCSS у CSS
gulp.task('scss', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

// Завдання для очищення вихідної директорії
let del;
gulp.task('clean', async function () {
    del = del || (await import('del')).deleteAsync;
    return del(['./dist/**', '!./dist']);
});

// Завдання для об'єднання CSS-файлів у один
gulp.task('concat', function () {
    return gulp.src('./dist/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./dist/css'));
});

// Завдання для перейменування об'єднаного CSS-файлу
gulp.task('rename', function () {
    return gulp.src('./dist/css/styles.css')
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'));
});

// Завдання для оптимізації (мінімізації) CSS
gulp.task('optimize-css', function () {
    return gulp.src('./dist/css/styles.min.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./dist/css'));
});

// Завдання для мінімізації JavaScript
gulp.task('optimize-js', function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'));
});

// Завдання для оптимізації зображень
gulp.task('images', async function () {
    const imagemin = (await import('gulp-imagemin')).default;
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
});

// Завдання для виконання всіх попередніх завдань у визначеному порядку
gulp.task('build', gulp.series('clean', 'scss', 'concat', 'rename', 'optimize-css', 'optimize-js', 'images'));
// Завдання за замовчуванням: виконує 'build'
gulp.task('default', gulp.series('build'));