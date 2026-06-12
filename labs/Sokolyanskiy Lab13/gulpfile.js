const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const del = require('del');

function clean() {
    return del(['dist']);
}

function styles() {
    return src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist/css'));
}

function scripts() {
    return src('src/js/**/*.js', { allowEmpty: true })
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('dist/js'));
}

function images() {
    return src('src/img/**/*.{jpg,jpeg,png,gif,svg}')
        .pipe(dest('dist/img/'));
}

function html() {
    return src('src/*.html')
        .pipe(dest('dist/'));
}

function watchFiles() {
    watch('src/scss/**/*.scss', styles);
    watch('src/js/**/*.js', scripts);
    watch('src/*.html', html);
    watch('src/img/**/*', images);
}

const build = series(clean, parallel(styles, scripts, images, html));

exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.html = html;
exports.build = build;
exports.default = series(build, watchFiles);