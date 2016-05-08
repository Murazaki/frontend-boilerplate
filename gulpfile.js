"use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    uncss = require('gulp-uncss'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint');

// Variables
var path = {
  src: {
    root: 'src/',
    scss: 'src/scss/',
    scripts: 'src/scripts/'
  },
  public: {
    root: 'public/',
    assets: 'public/assets/',
    images: 'public/assets/img/',
    css: 'public/assets/css/',
    scripts: 'public/assets/js/'
  }
};

var file = {
  src: {},
  public: {
    css: 'style.css',
    scripts: 'script.js'
  }
};


gulp.task('sass', function () {
  return gulp.src(path.src.scss + '**/*.scss')
    .pipe(sass().on('error', sass.logError))      // Compile le code SASS
    .pipe(concat(file.public.css))                // Concatène le code CSS
    .pipe(gulp.dest(path.public.css))             // Publie le fichier CSS dans le dossier CSS
    //.pipe(uncss({html: ['public/index.html']}))   // Enlève le fichier CSS des dépendances du code HTML
    .pipe(cssnano())                              // Minifie le code CSS
    .pipe(rename({suffix: '.min'}))               // Rajoute le suffixe '.min' au fichier CSS
    .pipe(gulp.dest(path.public.css));            // Publie le fichier minifié dans le dossier CSS
});

gulp.task('scripts', function () {
  return gulp.src(path.src.scripts + '**/*.js')
    .pipe(jshint())                               // Vérifie le code JS avec JSHint
    .pipe(jshint.reporter('default'))             // Retourne les erreurs trouvées
    .pipe(concat(file.public.scripts))            // Concatène le code JS
    .pipe(gulp.dest(path.public.scripts))         // Publie le fichier JS dans le dossier JS
    .pipe(uglify())                               // Minifie le code JS
    .pipe(rename({suffix: '.min'}))               // Rajoute le suffixe '.min' au fichier JS
    .pipe(gulp.dest(path.public.scripts));        // Publie le fichier minifié dans le dossier JS
});


// Watch tasks
gulp.task('sass:watch', function () {
  gulp.watch(path.src.scss + '**/*.scss', ['sass']);
});

gulp.task('scripts:watch', function () {
  gulp.watch(path.src.scripts + '**/*.js', ['scripts']);
});

gulp.task('all:watch', ['sass:watch', 'scripts:watch']);
