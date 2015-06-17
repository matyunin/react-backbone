'use strict';

var gulp = require("gulp");
var gulpRename = require("gulp-rename");

gulp.task('default', function () {
    return gulp.src()
        .pipe(rename(path.basename(item.dest)))
        .pipe(gulp.dest(path.dirname(item.dest)));
});
