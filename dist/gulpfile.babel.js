'use strict';

var _gulpSass = require('gulp-sass');

var _gulpSass2 = _interopRequireDefault(_gulpSass);

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpLoadPlugins = require('gulp-load-plugins');

var _gulpLoadPlugins2 = _interopRequireDefault(_gulpLoadPlugins);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var browserSync = require('browser-sync').create();

//Compile SASS
_gulp2.default.task('sass', function () {
	return _gulp2.default.src(['node_modules/bootstrap/scss/bootstrap.scss', 'template/scss/*.scss']).pipe((0, _gulpSass2.default)()).pipe(_gulp2.default.dest('template/css')).pipe(browserSync.stream());
});

//Move JS Files to TEMPLATE
_gulp2.default.task('js', function () {
	return _gulp2.default.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/popper.js', 'node_modules/summernote/dist/summernote.min.js']).pipe(_gulp2.default.dest('template/js')).pipe(browserSync.stream());
});

// //Watch SASS & Serve
// gulp.task('serve', ['sass'], () => {
//     browserSync.init({
//         server: "./template"
//     });

//     gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'template/scss/*.scss'], ['sass']);
//     gulp.watch("template/*.html").on('change', browserSync.reload);
// });

//Move Font Awesome Fonts folder to template
_gulp2.default.task('fonts', function () {
	return _gulp2.default.src('node_modules/font-awesome/fonts/*').pipe(_gulp2.default.dest('template/fonts'));
});

//Move font awesome css file
_gulp2.default.task('fa', function () {
	return _gulp2.default.src('node_modules/font-awesome/css/font-awesome.min.css').pipe(_gulp2.default.dest('template/css'));
});

//Move Summernote css file
_gulp2.default.task('fa', function () {
	return _gulp2.default.src('node_modules/summernote/dist/summernote.css').pipe(_gulp2.default.dest('template/css'));
});

_gulp2.default.task('default', ['js', 'serve', 'fa', 'fonts']);

// Load the gulp plugins into the `plugins` variable
var plugins = (0, _gulpLoadPlugins2.default)();

var paths = {
	js: ['./**/*.js', '!dist/**', '!node_modules/**']
};

// Compile all Babel Javascript into ES5 and put it into the dist dir
_gulp2.default.task('babel', function () {
	return _gulp2.default.src(paths.js, { base: '.' }).pipe(plugins.babel()).pipe(_gulp2.default.dest('dist'));
});

// Start server with restart on file change events
_gulp2.default.task('nodemon', ['babel'], function () {
	return plugins.nodemon({
		script: _path2.default.join('dist', 'index.js'),
		ext: 'js',
		ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
		tasks: ['babel']
	});
});