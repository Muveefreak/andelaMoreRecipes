const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//Compile SASS
gulp.task('sass', function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'template/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("template/css"))
    .pipe(browserSync.stream());
});

//Move JS Files to TEMPLATE
gulp.task('js', function(){
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.js'])
    .pipe(gulp.dest("template/js"))
    .pipe(browserSync.stream());
});

//Watch SASS & Serve
gulp.task('serve', ['sass'], function(){
    browserSync.init({
        server: "./template"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'template/scss/*.scss'], ['sass']);
    gulp.watch("template/*.html").on('change', browserSync.reload);
});

//Move Font Awesome Fonts folder to template
gulp.task('fonts', function(){
    return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest("template/fonts"));
});

//Move font awesome css file
gulp.task('fa', function(){
    return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest("template/css"));
});

gulp.task('default', ['js', 'serve', 'fa', 'fonts']);