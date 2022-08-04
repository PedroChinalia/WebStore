const gulp = require('gulp')
const {series} = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin');

function tasksCSS(callback){

    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './src/css/fonts.css',
        './src/css/style.css'
        ])
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))

    return callback()
}

function tasksJS(callback){

    gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/jquery-mask-plugin/dist/jquery.mask.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './node_modules/bootstrap/dist/js/bootstrap.bundle.js',
        './src/js/custom.js'
        ])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/js'))

    return callback()
}

function tasksHTML(callback){
    
    gulp.src('./src/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))

    return callback()
}

function tasksImages(){

    return gulp.src('.src/imag/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
}

exports.default = series( tasksHTML, tasksCSS, tasksJS )
exports.styles = tasksCSS
exports.scripts = tasksJS
exports.images = tasksImages
