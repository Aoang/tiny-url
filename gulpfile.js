var gulp = require('gulp');

var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify-css', function() {
	return gulp.src('_book/**/*.css')
		.pipe(minifycss().on('error', function(e) {
			console.log(e)
		}))
		.pipe(gulp.dest('_book'));
});

gulp.task('minify-html', function() {
	var option = {
		removeComments: true,
		minifyJS: true,
		minifyCSS: true,
		collapseWhitespace: true
	}
	return gulp.src('_book/**/*.html')
		.pipe(htmlmin(option))
		.pipe(gulp.dest('_book'));
});

gulp.task('minify-js', function() {
	return gulp.src('_book/**/*.js')
		.pipe(uglify().on('error', function(e){
			console.log(e)
		}))
		.pipe(gulp.dest('_book'));
});

gulp.task('build', gulp.parallel('minify-html', 'minify-css', 'minify-js'));