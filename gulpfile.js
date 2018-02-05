const gulp = require('gulp'),
    sass = require('gulp-sass'),
    wait = require('gulp-wait'),
    imagemin = require('gulp-imagemin'),
    cleanCSS = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    gzip = require('gulp-gzip'),
    concatCss = require('gulp-concat-css');

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

//Clean CSS
gulp.task('minify-css', () => {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css'));
});

// Minify HTML
gulp.task('minify-html', function() {
    return gulp.src('src/products/**/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist/products/'));
});

// Minify JS
gulp.task('minify-js', function(cb) {
    pump([
            gulp.src('src/js/*.js'),
            uglify(),
            gulp.dest('dist/js')
        ],
        cb
    );
});

// GZIP

gulp.task('gzip', function() {
    gulp.src('src/js/*.js')
        .pipe(gzip())
        .pipe(gulp.dest('dist/js'));
});

// Concat CSS
gulp.task('concat', function() {
    return gulp.src('src/css/*.css')
        .pipe(concatCss("index.css"))
        .pipe(gulp.dest('dist/css'));
});

// Copy
gulp.task('copy', function() {
    return gulp.src('src/**/*.*')
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['sass', 'watch']);