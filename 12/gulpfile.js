const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const del = require("del");
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync").create();

gulp.task("sass", function () {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

gulp.task("minify-css", function () {
  return gulp
    .src("css/**/*.css")
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("scripts", function () {
  return gulp
    .src("src/js/**/*.js")
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/js"));
});

gulp.task("images", function () {
  return gulp
    .src("images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
});

gulp.task("clean", function () {
  return require("del")(["dist"]);
});

gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("scss/**/*.scss", gulp.series("sass"));
  gulp.watch("js/**/*.js", gulp.series("scripts"));
  gulp.watch("css/**/*.css", gulp.series("minify-css"));
  gulp.watch("images/**/*", gulp.series("images"));
  gulp.watch("dist/**/*").on("change", browserSync.reload);
});

gulp.task(
  "build",
  gulp.series("clean", gulp.parallel("sass", "scripts", "minify-css", "images"))
);
