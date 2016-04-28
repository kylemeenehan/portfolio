var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

var config = {
  injectBowerJS : {
    outputFileName: 'vendor.js',
    outputFilePath: './app/assets/js'
  },
  browserSync : {
    baseDir: 'app'
  }
}

gulp.task('sass', function () {
  return gulp.src('./app/assets/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('vendor-js', function(){

  return gulp.src('app/assets/js/vendor/*.js')
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest('./app/assets/js'));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: config.browserSync.baseDir
    },
  })
});

gulp.task('watch:sass', function () {
  gulp.watch('./app/assets/sass/**/*.scss', ['sass']);
});

gulp.task('watch',['browserSync', 'sass'], function () {
  gulp.watch('./app/assets/sass/**/*.scss', ['sass']);
  gulp.watch('./app/**/*.html', browserSync.reload); 
  gulp.watch('./app/**/*.js', browserSync.reload);
});

