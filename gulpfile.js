const gulp = require('gulp')
const {series} = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const imagemin = require('gulp-imagemin')
const babel = require('gulp-babel')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

function tasksCSS(callback){

    gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './src/css/style.css',
        './src/css/fonts.css'
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
        .pipe(babel({
            comments: true,
            presets: ['@babel/env']
        }))
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

    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
}

gulp.task('server', function(){

    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    gulp.watch('./src/**/*').on('change', process)
    gulp.watch('./dist/**/*').on('change', reload)
})

const process = series( tasksHTML, tasksCSS, tasksJS )

exports.default = process
exports.styles = tasksCSS
exports.scripts = tasksJS
exports.images = tasksImages
