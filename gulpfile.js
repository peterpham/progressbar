var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var rjs = require('gulp-requirejs-optimize');
var nunjucks = require('gulp-nunjucks');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// copy vendors file
gulp.task("scripts-vendor", function() {
  return gulp.src("src/js/vendor/*.js")
        .pipe(gulp.dest("temp/js/vendor"));
});

// run through babel transpile to ES5
gulp.task("scripts", ['lint', 'scripts-vendor'], function() {
  return gulp.src("src/js/*.js")
        .pipe(babel())
        .pipe(gulp.dest("temp/js"));
});

// recompile template
gulp.task('precompile', function(){
    return gulp.src("src/templates/*.html")
        .pipe(nunjucks.precompile())
        .pipe(gulp.dest("temp/templates"));
})

// bundle JS
gulp.task('bundle', ['scripts', 'precompile'], function() {

    return gulp.src('temp/js/app.js')
        .pipe(rjs({
            baseUrl: 'temp/js',
            mainConfigFile: 'src/js/core.js',
           // name: 'app',
            skipDirOptimize: true
        }))
        .pipe(gulp.dest('temp/js'));

});

gulp.task('concat', ['bundle'], function() {
    return  gulp.src(['temp/templates/*.js', 'temp/js/app.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['scripts', 'concat']);
    gulp.watch('src/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'bundle', 'watch']);