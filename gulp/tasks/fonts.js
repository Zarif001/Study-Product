module.exports = () =>
    $.gulp.task('fonts', () => /* Ставим задачу gulp'y что нужно делать с fonts */
        $.gulp.src($.path.src.fonts) /* говорим откуда взять файлы */
        .pipe($.gulp.dest($.path.build.fonts)).on('end', $.bs.reload)) 
        /* Переносим всё в build и когда он найдет путь перезагружаем BS */