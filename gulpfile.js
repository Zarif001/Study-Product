global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: { /* подключаем пути работы gulp'a */
        tasks: require('./gulp/config/tasks'),
        serverDir: './app/build',

        src: { /* даем понимание что откуда нужно брать */
            html: './app/src/*.{html,pug,jade}',
            style: './app/src/styles/*.*',
            js: './app/src/script/*.*',
            img: './app/src/images/**/*.{png,jpg,gif,svg}',
            fonts: './app/src/fonts/**/**/*.*'
        },

        build: {/* Построенная версия */
            html: './app/build/',
            style: './app/build/styles/',
            js: './app/build/script/',
            img: './app/build/images/',
            fonts: './app/build/fonts/'
        },

        watch: { /* говорим за какими файлами нужно следить */
            html: ['./app/src/*.{html,pug,jade}', './app/src/view/**/*.{html,pug,jade}'],
            style: './app/src/styles/**/*.*',
            js: './app/src/script/**/*.*',
            img: './app/src/images/**/*.{png,jpg,gif,svg}',
            fonts: './app/src/fonts/**/*.*'
        }
    }
}

$.path.tasks.forEach(taskPath => require(taskPath)()); /* Перебираем массив и запускаем все плагины */

$.gulp.task('default', $.gulp.series($.gulp.parallel('html', 'style', 'js', 'img', 'fonts', 'watch', 'serve')))
/* ставим задачи галпу что делать по умолчанию */

$.gulp.task('build', $.gulp.series($.gulp.parallel('html', 'style', 'js', 'img', 'fonts')));
/* Ставим задачу для построенной версии */