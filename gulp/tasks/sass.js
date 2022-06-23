const sass = require('gulp-sass')(require('sass'));
module.exports = () =>
    $.gulp.task('style', () =>
        $.gulp.src($.path.src.style)
            .pipe(sass())
            .pipe($.gp.autoprefixer()) /* добавляем префиксы */
            .pipe($.gp.groupCssMediaQueries()) /* перемещаем все медиа запросы в колнец файла */
            .pipe(sass({ outputStyle: 'compressed' })) /* Сжатие css */
            .pipe($.gp.rename('main.min.css')) /* Переименновавыем файл css */
            .pipe($.gulp.dest($.path.build.style)).on('end', $.bs.reload)
    )