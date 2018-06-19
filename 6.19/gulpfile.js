var gulp = require('gulp');

var server = require('gulp-webserver');

var data=require('./src/mock/data.json')

gulp.task('server', function () {
    gulp.src('./src')
        .pipe(server({
            port: 9090,
            open: true,
            middleware: function (req, res, next) {
                if(req.url==="/api/list"){
                    res.end(JSON.stringify(data))
                }
                next()
            }
        }))
})