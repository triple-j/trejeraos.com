var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');
    
var sassConfig = {
    errLogToConsole: true
};

var sassFiles = [
    './source/scss/main.scss'
];

var cssDest = './source/css';

var watchFiles = [
    './source/scss/**/*.{scss,sass}'
];

gulp.task('sass', function () {
    gulp.src(sassFiles)
        .pipe(sourcemaps.init())
        .pipe(sass(sassConfig))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function() {
  gulp.watch(watchFiles, ['sass'])
});

gulp.task('default', ['sass', 'watch']);
