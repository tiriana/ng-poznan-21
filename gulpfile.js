var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var tsify = require('tsify');
var less = require('gulp-less');
var path = require('path');
var rename = require('gulp-rename');
var dirname = __dirname;

gulp.task('scripts', function() {
    var bundler = browserify({
            basedir: dirname + + '/app'
        })
        .add(dirname + '/app/main.ts')
        .plugin(tsify);

    return bundler.bundle()
        .pipe(source('js/app.js'))
        .pipe(gulp.dest(dirname + '/public'));
});

gulp.task('less', function() {
    return gulp.src('./app/less/main.less')
        .pipe(less({
            paths: [
                '.',
                './node_modules/bootstrap-less',
                path.join(__dirname, 'less', 'includes')
            ]
        }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('styles', ['less']); // alias

gulp.task('build', ['styles', 'scripts']);

gulp.task('watch', function() {
    gulp.watch(['./app/**/*.ts', './app/*.ts'], ['scripts']);
    gulp.watch(['./app/**/*.less'], ['styles']);
});
