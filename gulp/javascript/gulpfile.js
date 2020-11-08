const gulp = require('gulp')
const { series, on } = require('gulp')
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')

function transformationJS(callback) {
    return gulp.src(['src/**/*.js'])
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on( 'error', err => console.log(err))
        .pipe(concat('code.min.js'))
        .pipe(gulp.dest('build'))
    // return callback()
}

function fim(callback) {
    console.log('Fim!')
    return callback()
}

exports.default = series(transformationJS, fim)
