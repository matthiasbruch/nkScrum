var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var runSequence = require('run-sequence');
var bs = require("browser-sync").create();

var bsInitialized = false;

gulp.task('default', function() {
  console.log('use "gulp watch".');
});

gulp.task('watch', function() {
  bs.init({
    server: './dist'
  });
  bsInitialized = true;

  gulp.watch([
    './assets/**/*',
    './gameScripts/**/*'
  ], function(file) {
    if (file.path.indexOf('assets') > -1) {
      console.log('Copying file: ' + file.path);

      gulp.src(file.path)
        .pipe(gulp.dest('./dist'));

      bs.reload();
    }
    else if (file.path.indexOf('gameScripts') > -1) {
      gulp.start('compile');
    }
  });
});

gulp.task('clean', function() {
  return del([
    './dist'
  ]);
});

gulp.task('copy-assets', function() {
  gulp.src(['assets/**/*'])
    .pipe(gulp.dest('./dist'));

  gulp.src(['node_modules/phaser/dist/phaser.min.js'])
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('compile', function() {
  return gulp.src(['gameScripts/**/*.ts'])
    .pipe(sourcemaps.init())
    .pipe(ts({
        // "target": "ES5",
        "noImplicitAny": true,
        "outFile": 'build.js',
        "rootDir": "gameScripts"
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'));

  if (bsInitialized) {
    bs.reload();
  }
});

gulp.task('rebuild', function() {
  runSequence('clean', 'copy-assets', 'compile');
});