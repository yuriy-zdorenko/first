const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');

// Компіляція SCSS у CSS з використанням стрілкових функцій
gulp.task('sass', () => gulp.src('src/style/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/style'))
    .pipe(browserSync.stream())
);

// Об'єднання та мінімізація CSS
gulp.task('css', () => gulp.src('dist/style/*.css')
    .pipe(concat('styles.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/style'))
    .pipe(browserSync.stream())
);

// Оптимізація зображень
gulp.task('imagemin', () => gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

// Об'єднання та мінімізація JS
gulp.task('js', () => gulp.src('src/js/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream())
);

// Очищення каталогу dist
gulp.task('clean', () => del(['dist']));

// Слідкування за змінами та перезавантаження
gulp.task('serve', () => {
    browserSync.init({
        server: { baseDir: '.' }
    });

    gulp.watch('src/style/**/*.scss', gulp.series('sass', 'css')).on('change', browserSync.reload);
    gulp.watch('src/js/*.js', gulp.series('js')).on('change', browserSync.reload);
    gulp.watch('src/images/*', gulp.series('imagemin')).on('change', browserSync.reload);
    gulp.watch('*.html').on('change', browserSync.reload);
});

// Завдання за замовчуванням
gulp.task('default', gulp.series('clean', 'sass', 'css', 'js', 'imagemin', 'serve'));
