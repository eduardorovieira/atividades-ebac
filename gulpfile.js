const gulp = require('gulp');
const sass = require ('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function compilaSass() {
  return gulp.src('./source/styles/*main.scss')
  .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

function FuncaoPadrao(callback) {
  console.log("Executando via Gulp");
  callback();
}

function FuncaoOi(callback) {
  console.log("Oi");
  callback();
}


exports.default = gulp.parallel(FuncaoOi, FuncaoPadrao);
exports.sass = compilaSass;
exports.watch = function() {
  gulp.watch('./source/styles/*.scss', {ignoreInitial:false},gulp.series(compilaSass));
}

