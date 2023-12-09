const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//робота з препроцесором SCSS
gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Конкатенація файлів
gulp.task('concat', function () {
  return gulp.src('src/js/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('dist/js'));
});

// Перейменування та видалення відповідних файлів
gulp.task('rename-delete', function () {
  return gulp.src('src/*.txt')
    .pipe(rename({ prefix: 'new-' }))
    .pipe(gulp.dest('dist'))
    .pipe(del());
});

// Оптимізація CSS
gulp.task('optimize-css', function () {
  return gulp.src('dist/css/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'));
});

// Оптимізація JS
gulp.task('optimize-js', function () {
  return gulp.src('dist/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Автоматичний перегляд файлів
gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/js/*.js', gulp.series('concat'));
});

// Оптимізація зображень
gulp.task('optimize-images', function () {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch', 'concat', 'rename-delete','optimize-css','optimize-js','optimize-images'));