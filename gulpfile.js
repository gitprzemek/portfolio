var gulp = require("gulp");
// var uglify = require("gulp-uglify");
var uglify = require('gulp-uglify-es').default;
var concat = require("gulp-concat");
var cssMin = require("gulp-css");

gulp.task("css", function(){

    gulp.src([
        "./css/normalize.css",
        "./css/style.css",
        "./css/responsive.css"
    ])
        .pipe(concat("style.min.css"))
        .pipe(cssMin())
        .pipe(gulp.dest("./css"));

});

gulp.task("scripts", function(){

    gulp.src([

        "./js/jquery-3.3.1.min.js",
        "./js/jquery.vticker-min.js",
        "./js/main.js"
    ])
        .pipe(concat("main.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./js"));

});


gulp.task("default", ["css", "scripts"]);