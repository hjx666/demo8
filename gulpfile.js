/**
 * Created by Enter on 2017-10-19.
 */
var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('server',function(){
    gulp.src('.').pipe(webserver({
        livereload: true,
        directoryListing: true,
        open: "/index.html",
        port: 8080
    }));
});