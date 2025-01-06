const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// Caminhos dos arquivos
const paths = {
  styles: {
    src: 'source/main.scss/',
    dest: 'build/main.css/', // Pasta de saída do CSS
  },
  scripts: {
    src: 'src/js/**/*.js', // Arquivos JS
    dest: 'dist/js/', // Pasta de saída do JS
  },
  images: {
    src: 'src/images/**/*', // Imagens para compressão
    dest: 'dist/images/', // Pasta de saída das imagens
  },
};

// Tarefa: Compilar SASS
function compileSass() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass().on('error', sass.logError)) // Compila o SASS
    .pipe(cleanCSS()) // Minifica o CSS
    .pipe(rename({ suffix: '.min' })) // Renomeia para .min.css
    .pipe(gulp.dest(paths.styles.dest));
}

// Tarefa: Comprimir imagens
function compressImages() {
  return gulp
    .src(paths.images.src)
    .pipe(imagemin()) // Comprime as imagens
    .pipe(gulp.dest(paths.images.dest));
}

// Tarefa: Minificar JS
function minifyJs() {
  return gulp
    .src(paths.scripts.src)
    .pipe(uglify()) // Minifica o JS
    .pipe(rename({ suffix: '.min' })) // Renomeia para .min.js
    .pipe(gulp.dest(paths.scripts.dest));
}

// Tarefa: Watch (Monitorar alterações)
function watchFiles() {
  gulp.watch(paths.styles.src, compileSass);
  gulp.watch(paths.scripts.src, minifyJs);
  gulp.watch(paths.images.src, compressImages);
}

