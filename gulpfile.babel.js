const combineStreams = require('stream-combiner');
const sourcemaps = require('gulp-sourcemaps');
const Highlights = require('highlights');
const browserify = require('browserify');
const pathExists = require('path-exists');
const watchify = require('watchify');
const babelify = require('babelify');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const through = require('through2');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const mkdirp = require('mkdirp');
const child = require('child_process');
const gutil = require('gulp-util');
const chalk = require('chalk');
const babel = require('gulp-babel');
const newer = require('gulp-newer');
const watch = require('gulp-watch');
const karma = require('karma');
const path = require('path');
const gulp = require('gulp');
const glob = require('glob');
const del = require('del');
const fs = require('fs');
const _ = require('lodash');

const highlighter = new Highlights();

highlighter.requireGrammarsSync({
  modulePath: require.resolve('language-babel/package.json')
});

const scripts = './packages/*/src/**/*.js';
const dest = 'packages';

const exampleComponents = 'packages/cf-component-*/example/*/component.js';
const exampleStyles = ['example/base.css', 'example/styles.css'];
const exampleIcons = 'example/icons/*';

const vendors = [
  'react',
  'react-dom',
  'lodash',
  'react-addons-css-transition-group'
];

let srcEx, libFragment;

if (path.win32 === path) {
  srcEx = /(packages\\[^\\]+)\\src\\/;
  libFragment = '$1\\lib\\';
} else {
  srcEx = new RegExp('(packages/[^/]+)/src/');
  libFragment = '$1/lib/';
}

function execSync(cmd) {
  return child.execSync(cmd, {
    encoding: 'utf8'
  }).trim();
};

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

function compile(watch) {
  return gulp.src(scripts)
    .pipe(fixErrorHandling())
    .pipe(renameSrcToLib())
    .pipe(watch ? newer(dest) : gutil.noop())
    .pipe(through.obj((file, enc, callback) => {
      const filepath = path.relative(path.resolve(__dirname, 'packages'), file._path);
      gutil.log('Compiling', '\'' + chalk.cyan(filepath) + '\'...');
      callback(null, file);
    }))
    .pipe(babel())
    .pipe(gulp.dest(dest));
};

function initBrowserify(files, output, externals, requires, transforms, watch) {
  const options = {
    transform: transforms
  };

  if (watch) {
    _.assign(options, watchify.args);
  }

  let bundler = browserify(files, options);

  if (externals) {
    bundler.external(externals);
  }

  if (requires) {
    bundler.require(requires);
  }

  if (watch) {
    bundler = watchify(bundler);
    bundler.on('update', update);
    bundler.on('log', gutil.log);
    bundler.on('update', () => gutil.log('Rebundling...'));
    bundler.on('time', time => {
      gutil.log('Rebundled in:', gutil.colors.cyan(time + 'ms'));
    });
  }

  function update() {
    return bundler.bundle()
      .on('error', err => {
        gutil.log(err);
        this.emit('end');
      })
      .pipe(source(output))
      .pipe(buffer())
      .pipe(sourcemaps.init({
        loadMaps: true
      }))
      .pipe(watch ? gutil.noop() : uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('dist'));
  }

  return update();
}

function initBrowserifyBundle(watch) {
  const files = glob.sync(path.resolve(__dirname, exampleComponents));
  return initBrowserify(files, 'bundle.js', vendors, null, [babelify], watch);
}

function initBrowserifyVendor(watch) {
  return initBrowserify([], 'vendor.js', null, vendors, [], watch);
}

export function examplesBuildHtml(cb) {
  const packagesPath = path.resolve(__dirname, 'packages');
  const packages = fs.readdirSync(packagesPath).filter(pkg => {
    return pkg.indexOf('cf-component-') > -1;
  });

  let componentsHtml = '';
  let sidebarHtml = '';

  packages.forEach(pkg => {
    const examplesPath = path.resolve(packagesPath, pkg, 'example');

    if (!pathExists.sync(examplesPath)) {
      return;
    }

    const examples = fs.readdirSync(examplesPath);

    componentsHtml += '<h2 class="cf-example__heading" id="' + pkg + '">' + pkg + '</h2>';

    examples.forEach(example => {
      const contentPath = path.join(examplesPath, example, 'component.js');
      const content = fs.readFileSync(contentPath).toString();

      const higlightedContent = highlighter.highlightSync({
        fileContents: content,
        filePath: contentPath,
        scopeName: 'source.js'
      });

      if (example !== 'basic') {
        componentsHtml += '<p>' + example + '</p>';
      }

      componentsHtml += (
        '<div class="cf-example">' +
        '<div class="cf-example__content" id="' + pkg + '--' + example + '"></div>' +
        '<div class="cf-example__code">' + higlightedContent + '</div>' +
        '</div>'
      );
    });

    sidebarHtml += '<a href="#' + pkg + '">' + pkg + '</a>';
  });

  const styles = gutil.env.public ? 'styles.css' : '../../www-style/htdocs/static/stylesheets/components.css';

  const html = (
    '<!doctype html>' +
    '<html>' +
    '<head>' +
    '<meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width">' +
    '<title>CloudFlare Components</title>' +
    '<link rel="stylesheet" href="base.css">' +
    '<link rel="stylesheet" href="' + styles + '">' +
    '</head>' +
    '<body>' +
    '<header class="cf-example-header">cf-ui</header>' +
    '<nav class="cf-example-sidebar">' + sidebarHtml + '</nav>' +
    '<div class="cf-example-content">' + componentsHtml + '</div>' +
    '<script type="text/javascript" src="vendor.js"></script>' +
    '<script type="text/javascript" src="bundle.js"></script>' +
    '</body>' +
    '</html>'
  );

  mkdirp.sync(path.resolve(__dirname, 'dist'));
  fs.writeFileSync(path.resolve(__dirname, 'dist/index.html'), html);
  cb();
}

export const build = () => compile(false);

export function lint() {
  return gulp.src('./packages/*/src/**/*.js')
    .pipe(fixErrorHandling())
    .pipe(eslint())
    .pipe(eslint.format())
    // for some reason eslint doesn't work without this
    .on('data', file => {});
};

export const test = cb => initKarmaServer(true, cb);
const testWatch = cb => initKarmaServer(false, cb);

export function dev(cb) {
  watch(scripts, () => {
    compile(true);
    lint();
  });
  testWatch(cb);
};

export function examplesBuildCss() {
  return gulp.src(exampleStyles)
    .pipe(sourcemaps.init())
    .pipe(postcss([
      require('autoprefixer'),
      require('cssnano')()
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
}

export function examplesBuildIcons() {
  return gulp.src(exampleIcons)
    .pipe(gulp.dest('dist/icons'));
}

export const examplesClean = () => del(['dist']);

export const examplesBuildBundle = () => initBrowserifyBundle(false);
export const examplesBuildVendor = () => initBrowserifyVendor(false);
export const examplesDevBundle = () => initBrowserifyBundle(true);
export const examplesDevVendor = () => initBrowserifyVendor(true);

function logLocation(cb) {
  gutil.log('Open "file://' + path.resolve(__dirname, 'dist/index.html') + '" in your browser');
  cb();
}

export const examplesBuild =
  gulp.series(
    examplesClean,
    gulp.parallel(
      examplesBuildHtml,
      examplesBuildCss,
      examplesBuildIcons,
      examplesBuildBundle,
      examplesBuildVendor
    ),
    logLocation
  );

export const examplesDev =
  gulp.series(
    examplesClean,
    build,
    gulp.parallel(
      examplesBuildHtml,
      examplesBuildCss,
      examplesBuildIcons,
      examplesDevBundle,
      examplesDevVendor
    ),
    logLocation,
    function examplesWatcher() {
      gulp.watch(exampleComponents, examplesBuildHtml);
      gulp.watch(exampleStyles, examplesBuildCss);
      gulp.watch(exampleIcons, examplesBuildIcons);
      gulp.watch(scripts, () => compile(true));
    }
  );

function setEnvPublic(cb) {
  gutil.env.public = true;
  cb();
}

export const examplesPublish =
  gulp.series(
    setEnvPublic,
    examplesBuild,
    function examplesPublisher(cb) {
      execSync([
        'cd dist',
        'git init',
        'git remote add origin git@github.com:cloudflare/cf-ui.git',
        'git add -A',
        'git commit -m "[Deploy]"',
        'git push origin master:gh-pages --force'
      ].join(' && '));
      cb();
    }
  );
