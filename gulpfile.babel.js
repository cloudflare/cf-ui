import gulp from 'gulp';
import gutil from 'gulp-util';
import through from 'through2';
import chalk from 'chalk';
import babel from 'gulp-babel';
import path from 'path';
import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import watch from 'gulp-watch';
import eslint from 'gulp-eslint';
import karma from 'karma';

const scripts = './packages/*/src/**/*.js';
const dest = 'packages';

let srcEx, libFragment;

if (path.win32 === path) {
  srcEx = /(packages\\[^\\]+)\\src\\/;
  libFragment = '$1\\lib\\';
} else {
  srcEx = new RegExp('(packages/[^/]+)/src/');
  libFragment = '$1/lib/';
}

function fixErrorHandling() {
  return plumber({
    errorHandler(err) {
      gutil.log(err.stack);
    }
  });
}

function renameSrcToLib() {
  return through.obj((file, enc, callback) => {
    file._path = file.path;
    file.path = file.path.replace(srcEx, libFragment);
    callback(null, file);
  });
}

function initKarmaServer(singleRun, cb) {
  const configFile = __dirname + '/karma.conf.js';
  require('babel-register')({
    only: configFile
  });
  new karma.Server({
    configFile,
    singleRun
  }, cb).start();
}

function build() {
  return gulp.src(scripts)
    .pipe(fixErrorHandling())
    .pipe(renameSrcToLib())
    .pipe(newer(dest))
    .pipe(through.obj((file, enc, callback) => {
      gutil.log('Compiling', '\'' + chalk.cyan(file._path) + '\'...');
      callback(null, file);
    }))
    .pipe(babel())
    .pipe(gulp.dest(dest));
}

function lint() {
  gulp.src('./packages/*/src/**/*.js')
    .pipe(fixErrorHandling())
    .pipe(eslint())
    .pipe(eslint.format())

    // for some reason eslint doesn't work without this
    .on('data', file => {});
}

function test(cb) {
  initKarmaServer(true, cb);
}

function testWatch(cb) {
  initKarmaServer(false, cb);
}

function dev(cb) {
  watch(scripts, () => {
    build();
    lint();
  });
  testWatch(cb);
}

gulp.task('build', build);
gulp.task('lint', lint);
gulp.task('test', test);

gulp.task('dev', ['build'], dev);
