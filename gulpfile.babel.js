const gulp = require('gulp');
const gutil = require('gulp-util');
const through = require('through2');
const chalk = require('chalk');
const babel = require('gulp-babel');
const path = require('path');
const plumber = require('gulp-plumber');
const newer = require('gulp-newer');
const watch = require('gulp-watch');
const eslint = require('gulp-eslint');
const karma = require('karma');

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

function build(dev) {
  return gulp.src(scripts)
    .pipe(fixErrorHandling())
    .pipe(renameSrcToLib())
    .pipe(dev ? newer(dest) : gutil.noop())
    .pipe(through.obj((file, enc, callback) => {
      const filepath = path.relative(path.resolve(__dirname, 'packages'), file._path);
      gutil.log('Compiling', '\'' + chalk.cyan(filepath) + '\'...');
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
    build(true);
    lint();
  });
  testWatch(cb);
}

gulp.task('build', function() {
  return build(false);
});

gulp.task('lint', lint);
gulp.task('test', test);

gulp.task('dev', ['build'], dev);
