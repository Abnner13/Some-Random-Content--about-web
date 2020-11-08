const gulp = require('gulp')
const {series, parallel} = require('gulp')

const antes1 = callback => {
    console.log('tarefa de antes1')
    return callback()
}
const antes2 = callback => {
    console.log('tarefa de antes2')
    return callback()
    allback()
}

function copy(callback) {
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'))
    return callback()
}

const fim = callback => {
    console.log('tarefa de fim')
    return callback()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copy,
    fim
)
