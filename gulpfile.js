var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var tsify = require('tsify');
var less = require('gulp-less');
var path = require('path');
var rename = require('gulp-rename');

var config = {
    publicPath: __dirname + '/public',
    app: {
        path: __dirname + '/app',
        main: 'main.ts',
        result: 'js/app.js'
    }
};

gulp.task('scripts', function() {
    var bundler = browserify({
            basedir: config.app.path
        })
        .add(config.app.path + '/' + config.app.main)
        .plugin(tsify);

    return bundler.bundle()
        .pipe(source(config.app.result))
        .pipe(gulp.dest(config.publicPath));
});

gulp.task('less', function() {
    return gulp.src('./app/less/main.less')
        .pipe(less({
            paths: [
                './node_modules/bootstrap-less',
                path.join(__dirname, 'less', 'includes')
            ]
        }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('styles', ['less']);

gulp.task('watch', function() {
    gulp.watch(['./app/**/*.ts', './app/*.ts'], ['scripts']);
    gulp.watch(['./app/**/*.less'], ['styles']);
});
