const browserSync = require('browser-sync').create();

import sass from 'gulp-sass';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import path from 'path';


//Compile SASS
gulp.task('sass', () => gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'template/scss/*.scss'])
	.pipe(sass())
	.pipe(gulp.dest('template/css'))
	.pipe(browserSync.stream()));

//Move JS Files to TEMPLATE
gulp.task('js', () => gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.js', 'node_modules/summernote/dist/summernote.min.js'])
	.pipe(gulp.dest('template/js'))
	.pipe(browserSync.stream()));

// //Watch SASS & Serve
// gulp.task('serve', ['sass'], () => {
//     browserSync.init({
//         server: "./template"
//     });

//     gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'template/scss/*.scss'], ['sass']);
//     gulp.watch("template/*.html").on('change', browserSync.reload);
// });

//Move Font Awesome Fonts folder to template
gulp.task('fonts', () => gulp.src('node_modules/font-awesome/fonts/*')
	.pipe(gulp.dest('template/fonts')));

//Move font awesome css file
gulp.task('fa', () => gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
	.pipe(gulp.dest('template/css')));

//Move Summernote css file
gulp.task('fa', () => gulp.src('node_modules/summernote/dist/summernote.css')
	.pipe(gulp.dest('template/css')));

gulp.task('default', ['js', 'serve', 'fa', 'fonts']);

// Load the gulp plugins into the `plugins` variable
const plugins = loadPlugins();

const paths = {
	js: ['./**/*.js', '!dist/**', '!node_modules/**']
};

// Compile all Babel Javascript into ES5 and put it into the dist dir
gulp.task('babel', () => {
	return gulp.src(paths.js, { base: '.' })
		.pipe(plugins.babel())
		.pipe(gulp.dest('dist'));
});

// Start server with restart on file change events
gulp.task('nodemon', ['babel'], () =>
	plugins.nodemon({
		script: path.join('dist', 'index.js'),
		ext: 'js',
		ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
		tasks: ['babel']
	})
);