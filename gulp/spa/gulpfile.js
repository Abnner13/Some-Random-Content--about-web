const gulp = require('gulp')
const { series, parallel } = require('gulp')
const { depsCSS,depsFonts } = require('./gulpTasks/deps')
const { watchArchives,server } = require('./gulpTasks/server')
const { appHTML,appCSS,appJS,appIMG } = require('./gulpTasks/app')


module.exports.default = series(
    parallel(
        series(appHTML,appCSS,appJS,appIMG),
        series(depsCSS,depsFonts)
    ),
    server,
    watchArchives
)
