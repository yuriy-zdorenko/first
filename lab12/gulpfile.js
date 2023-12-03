var gulp = require("gulp");
var sass = require("gulp-sass");
var uglify = require("gulp-uglify");

gulp.task("sass", function () {
  return gulp
    .src("./sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("css", function () {
  gulp
    .src("./css/*.css")
    .pipe(uglify({ uglyComments: true }))
    .pipe(gulp.dest("./dist/"));
});

gulp.task("run"[("sass", "css")]);

gulp.task("watch", function () {
  gulp.watch("./sass/*.scss", ["sass"]);
  gulp.watch("./css/*.css", ["css"]);
});

gulp.task("default", ["run", "watch"]);
