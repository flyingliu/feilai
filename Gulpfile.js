var fs = require('fs')
var path = require('path')
var gulp = require('gulp')
var rename = require('gulp-rename')
var browserSync = require('browser-sync')
var reload = browserSync.reload
var deploy = require('gulp-gh-pages')
var cp = require('child_process')
var harp = require('harp')





/**
 * Serve the Harp Site from the src directory
 */
gulp.task('serve', function() {
    harp.server('./src/', {
        port: 9000
    }, function() {
        browserSync({
            proxy: 'localhost:9000',
            open: false,
            notify: {
                styles: ['opacity: 0', 'position: absolute']
            }
        });

        gulp.watch(["./src/**/*.css", "./src/**/*.scss"], function() {
            reload();
        });

        gulp.watch(["./src/**/*.html", "*.vue", "./src/**/*.jade", "./src/**/*.js", "*.json", "./src/**/*.md"], function() {
            reload();
        });
    })
})

gulp.task('sass', function() {
    return gulp.src('src/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(browsers))
        .pipe(browserSync.stream());
});


gulp.task('build', function(done) {
    cp.exec('harp compile . dist', {
            stdio: 'inherit'
        })
        .on('close', done)
})

gulp.task('browser-sync', function() {
    browserSync({
        proxy: 'localhost:9000'
    })
})

gulp.task('deploy', ['build'], function() {
    gulp.src('./dist/**/*')
        .pipe(deploy());
});

gulp.task("abc", function() {
    return gulp.src('./dist/src/**/*')
        .pipe(deploy());
});


gulp.task('default', ['serve']);