const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

function tasksCSS(){

    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './assets/css/fonts.css',
        './assets/css/style.css'
        ])
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
}

function tasksJS(){

    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/jquery-mask-plugin/dist/jquery.mask.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './node_modules/bootstrap/dist/js/bootstrap.bundle.js',
        './assets/js/custom.js'
        ])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/js'))
}

exports.styles = tasksCSS
exports.scripts = tasksJS
