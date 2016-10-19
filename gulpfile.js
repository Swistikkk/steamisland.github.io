var gulp = require('gulp');
var scss = require('gulp-sass');
var browserSync = require('browser-sync');

//emmet-lifestyle - плагин, для записывания изменений из консоли сразу в код


gulp.task('scss', function(){
  return gulp.src('app/sass/style.scss')
   .pipe(scss(
     //{outputStyle: 'compressed'}
   ).on('error', scss.logError))
   .pipe(gulp.dest('app/css'));
});

gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});

gulp.task('watch', ['browser-sync'], function(){
  gulp.watch('app/sass/**/*.scss', ['scss']);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/css/**/*.css', browserSync.reload);
  gulp.watch('app/*.html', browserSync.reload);
});

gulp.task('default', ['watch']);
