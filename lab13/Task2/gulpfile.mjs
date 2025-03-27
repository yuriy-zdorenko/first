// Імпорти модулів
import gulp from 'gulp';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import htmlmin from 'gulp-htmlmin';
import browserSync from 'browser-sync';
import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

// Ініціалізація BrowserSync
const bs = browserSync.create();
const sassCompiler = gulpSass(sass);

// Шляхи до файлів
const paths = {
    html: {
        src: 'src/*.html',
        dest: 'dist/',
    },
    styles: {
        src: 'src/scss/**/*.scss',
        dest: 'dist/css/',
    },
    images: {
        src: 'src/images/**/*.{jpg,jpeg,png,svg,gif}',
        dest: 'dist/images/',
    },
};

// Завдання: обробка HTML
export function html() {
    return gulp
        .src(paths.html.src)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(paths.html.dest))
        .pipe(bs.stream());
}

// Завдання: компіляція SCSS у CSS
export function styles() {
    return gulp
        .src(paths.styles.src)
        .pipe(sassCompiler().on('error', sassCompiler.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(bs.stream());
}

// Завдання: оптимізація зображень
const copyFile = promisify(fs.copyFile);
const readdir = promisify(fs.readdir);

export function images(done) {
    const srcDir = 'src/images';
    const destDir = 'dist/images';

    // Читаємо файли з srcDir
    readdir(srcDir)
        .then((files) => {
            // Копіюємо кожен файл у destDir
            const copyTasks = files.map((file) => {
                const srcPath = path.join(srcDir, file);
                const destPath = path.join(destDir, file);
                return copyFile(srcPath, destPath).then(() =>
                    console.log(`${file} успішно скопійовано.`)
                );
            });

            // Виконуємо всі копіювання та завершуємо завдання
            return Promise.all(copyTasks);
        })
        .then(() => {
            console.log('Копіювання завершено!');
            done(); // Сигналізуємо Gulp про завершення
        })
        .catch((err) => {
            console.error('Помилка під час копіювання:', err);
            done(err); // Сигналізуємо про помилку
        });
}

// Завдання: запуск локального сервера та слідкування за змінами
export function serve() {
    bs.init({
        server: {
            baseDir: 'dist',
        },
    });
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.images.src, images);
}

// Завдання за замовчуванням
export default gulp.series(gulp.parallel(html, styles, images), serve);