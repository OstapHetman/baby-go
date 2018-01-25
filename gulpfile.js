const gulp = require('gulp'),
    sass = require('gulp-sass'),
    wait = require('gulp-wait'),
    imagemin = require('gulp-imagemin');

gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(wait(150))
        .pipe(sass())
        .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['sass']);
});
// ImageMin
gulp.task('imagemin', () =>
    gulp.src('src/img/**/*.*')
    .pipe(imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 })
    ]))
    .pipe(gulp.dest('dist/img'))
);

gulp.task('default', ['sass', 'watch']);