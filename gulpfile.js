var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var rjs = require('gulp-requirejs-optimize');
var nunjucks = require('gulp-nunjucks');
var qunit = require('node-qunit-phantomjs');

var transpile = function(source, dest) {
    return gulp.src(source)
        .pipe(babel())
        .pipe(gulp.dest(dest));
}

// Lint Task
gulp.task('lint', function() {
    return gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// copy vendors file
gulp.task("copy vendors", function() {
  return gulp.src("src/js/vendor/*.js")
        .pipe(gulp.dest("temp/js/vendor"))
        .pipe(gulp.dest("dist/js/vendor"))
        .pipe(gulp.dest("temp/tests/vendor"));
});

// run through babel transpile to ES5
gulp.task("transpile", ['lint', 'copy vendors'], function() {
  return transpile("src/js/*.js", "temp/js");
});

// precompile template
gulp.task('precompile', function(){
    return gulp.src("src/templates/*.html")
        .pipe(nunjucks.precompile())
        .pipe(gulp.dest("dist/templates"));
})

// bundle JS
gulp.task('bundle-requirejs', ['transpile'], function() {

    return gulp.src('temp/js/app.js')
        .pipe(rjs({
            //baseUrl: 'temp/js',
            mainConfigFile: 'src/js/core.js',
           // name: 'app',
            skipDirOptimize: true
        }))
        .pipe(gulp.dest('temp/js'));

});

gulp.task('bundle', ['bundle-requirejs', 'precompile'], function() {
    return  gulp.src(['temp/templates/*.js', 'temp/js/app.js'])
       // .pipe(concat('app.js'))
        // .pipe(qunit( 'tests/testrunner.html', {
        //     'verbose': false
        // }))
        .pipe(gulp.dest('dist/js'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});



/* ================= TESTING with QUNIT ============== */
// transpile tests
gulp.task("transpile test", ['copy vendors'], function() {
    return transpile(["src/tests/*.js", "src/js/*.js"], "temp/tests");
});

gulp.task('bundle-requirejs test', ['transpile test'], function() {

    return gulp.src('temp/tests/start.js')
        .pipe(rjs({
            //baseUrl: 'temp/js',
            mainConfigFile: 'src/js/core.js',
           // name: 'app',
            skipDirOptimize: true,
            optimize: 'none'
        }))
        .pipe(gulp.dest('tests'));

});

gulp.task('test', ['bundle-requirejs test'], function () {
    return qunit( 'tests/testrunner.html', {
        'verbose': false
    });
});

/* ================ WATCHER ==================== */

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['bundle']);
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch(['src/tests/*.js', 'src/js/*.js'], ['test']);
});

// Default Task
gulp.task('default', ['sass', 'bundle', 'watch']);
