const gulp = require('gulp')
const sass = require('gulp-sass')
const { series, parallel } = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformCSS(callback) {
    return gulp.src('src/sass/index.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(uglifycss({ uglifycomments: true }))
            .pipe(concat('estilo.min.css'))        
            .pipe(gulp.dest('build/css'))
}

function copyHTML(callback) {
    return gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
}

exports.default = parallel(transformCSS, copyHTML)
