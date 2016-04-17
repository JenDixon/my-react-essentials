var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var watch = require('gulp-watch');

gulp.task('default', function() {
	return browserify('./source/app.js')
		.transform(reactify)
		.bundle()
		.pipe(source('snapterest.js'))
		.pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
	return watch('source/**/*.js', function() {
		gulp.start(browserify);
	});
});
