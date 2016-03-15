var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var tsify = require('tsify');
var plumber = require('gulp-plumber');

var config = {
    publicPath: __dirname + '/public',
    app: {
        path: __dirname + '/app',
        main: 'main.ts',
        result: 'js/app.js'
    }
};

gulp.task('scripts', function () {
    var bundler = browserify({
            basedir: config.app.path
        })
        .add(config.app.path + '/' + config.app.main)
        .plugin(tsify);

    return bundler.bundle()
        .pipe(source(config.app.result))
        .pipe(gulp.dest(config.publicPath));
});

gulp.task('watch', function () {
    gulp.watch(['./app/**/*.ts', './app/*.ts'], ['scripts']);
});
