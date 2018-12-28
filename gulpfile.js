(function () {
  "use strict";

  let del = require("del");
  let gulp = require("gulp");
  let gulptypescript = require("gulp-typescript");
  let gulpsourcemaps = require("gulp-sourcemaps");
  
  let tsProject = gulptypescript.createProject("./server/tsconfig.json");

  let cleanBuild = () => {
    return del(["./server/build"], {
      force: true
    });
  }


  let copyConfigToBuild = () => {
    return gulp.src(['./server/config/**/*.json'])
      .pipe(gulp.dest('./server/build/server/config'));
  }


  let compileToBuild = () => {

    let tsResult = tsProject.src()
      .pipe(gulpsourcemaps.init())
      .pipe(tsProject());
    return tsResult.js
      .pipe(gulpsourcemaps.write('.', {
        includeContent: false,
        sourceRoot: '.'
      }))
      .pipe(gulp.dest("./server/build"));
  }



  gulp.task("clean:build", cleanBuild);
  gulp.task("copy:config:build", copyConfigToBuild);
  gulp.task("compile:build", compileToBuild);

  gulp.task("build:dev",
    gulp.series(
      'clean:build',
      'copy:config:build',
      'compile:build'
    ));


}());