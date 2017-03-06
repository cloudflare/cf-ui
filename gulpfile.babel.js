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
const uglify = require('gulp-uglify');
const mkdirp = require('mkdirp');
const envify = require('envify/custom');
const child = require('child_process');
const gutil = require('gulp-util');
const chalk = require('chalk');
const babel = require('gulp-babel');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const generate = require('babel-generator').default;
const t = require('babel-types');
const newer = require('gulp-newer');
const watch = require('gulp-watch');
const karma = require('karma');
const path = require('path');
const gulp = require('gulp');
const glob = require('glob');
const del = require('del');
const fs = require('fs');
const _ = require('lodash');

const exludedNewPackages = ['cf-component-button'];

const highlighter = new Highlights();

highlighter.requireGrammarsSync({
  modulePath: require.resolve('language-babel/package.json')
});

const scripts = './packages/*/src/**/*.js';
const dest = 'packages';

const exampleComponents = 'packages/cf-{component,builder}-*/example/*/component.js';
const exampleStyles = ['example/base.css', 'example/styles.css'];
const exampleAssets = 'example/assets/*';

const vendors = [
  'react',
  'react-dom',
  'lodash',
  'react-addons-css-transition-group',
  'redux',
  'react-redux'
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
  return child
    .execSync(cmd, {
      encoding: 'utf8'
    })
    .trim();
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
  new karma.Server(
    {
      configFile,
      singleRun
    },
    exitCode => {
      if (exitCode > 0) {
        cb(new Error(`Karma exited with status code ${exitCode}`));
      } else {
        cb();
      }
    }
  ).start();
}

function compile(watch) {
  return gulp
    .src(scripts)
    .pipe(fixErrorHandling())
    .pipe(renameSrcToLib())
    .pipe(watch ? newer(dest) : gutil.noop())
    .pipe(
      through.obj((file, enc, callback) => {
        const filepath = path.relative(
          path.resolve(__dirname, 'packages'),
          file._path
        );
        gutil.log('Compiling', "'" + chalk.cyan(filepath) + "'...");
        callback(null, file);
      })
    )
    .pipe(babel())
    .pipe(gulp.dest(dest));
}

function isLocalPropTypeRequire(node) {
  let isPropType = node.id &&
    node.id.name &&
    _.includes(node.id.name, 'PropTypes');
  let isLocalRequire = false;

  if (node.init && node.init.callee) {
    let isRequire = node.init.callee.name === 'require';
    let args = node.init.arguments;
    isLocalRequire = isRequire &&
      args &&
      args.length &&
      _.includes(args[0].value, './');
  }
  return isPropType && isLocalRequire;
}

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

  if (!watch) {
    bundler.transform(
      envify({
        NODE_ENV: 'production'
      }),
      {
        global: true
      }
    );
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
    return bundler
      .bundle()
      .on('error', function(err) {
        gutil.log(err.stack);
        this.emit('end');
      })
      .pipe(source(output))
      .pipe(buffer())
      .pipe(
        sourcemaps.init({
          loadMaps: true
        })
      )
      .pipe(watch ? gutil.noop() : uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('docs'));
  }

  return update();
}

function initBrowserifyBundle(watch) {
  const files = glob.sync(path.resolve(__dirname, exampleComponents), {
    ignore: exludedNewPackages.map(pkg => '**/' + pkg + '/**')
  });
  return initBrowserify(files, 'bundle.js', vendors, null, [babelify], watch);
}

function initBrowserifyVendor(watch) {
  return initBrowserify([], 'vendor.js', null, vendors, [], watch);
}

function createPropTypesSection(id, title, props) {
  return '<h4 class="cf-example__proptypes_name" id="' +
    id +
    '">' +
    title +
    '</h3>' +
    '<div class="cf-example__proptypes_table">' +
    '<table>' +
    '<thead>' +
    '<tr>' +
    '<th>Prop Name</th>' +
    '<th>Prop Validation</th>' +
    '</tr>' +
    '</thead>' +
    '<tbody>' +
    props
      .map(prop => {
        let value = highlighter.highlightSync({
          fileContents: prop.value,
          filePath: prop.name,
          scopeName: 'source.js'
        });

        if (prop.link) {
          value = value.replace(
            prop.link,
            '<a href="#' + prop.link + '">' + prop.link + '</a>'
          );
        }

        return '<tr>' +
          '<th><code>' +
          prop.name +
          '</code></th>' +
          '<td>' +
          value +
          '</td>' +
          '</tr>';
      })
      .join('') +
    '</tbody>' +
    '</table>' +
    '</div>';
}

function parseSourceFile(source, fileName) {
  let proptypesHtml = '';

  const ast = babylon.parse(source, {
    sourceType: 'module',
    plugins: ['jsx', 'objectRestSpread']
  });

  let propTypes = [];
  let componentName = fileName;

  traverse(ast, {
    enter(path) {
      // Update the component name with the variable name used in its class definition
      if (t.isClassDeclaration(path.node)) {
        componentName = path.node.id.name;
      }

      // iterate over each prop and populate an array containing the name of
      // the prop and its value
      if (
        t.isClassProperty(path.node) &&
        t.isIdentifier(path.node.key, { name: 'propTypes' })
      ) {
        path.node.value.properties.forEach(prop => {
          let propValue = generate(prop.value, {}, source).code;
          const propName = prop.key.name;
          let link;

          // look up the variable name and see if it's being required from a
          // local file. If it is, convert the text to a hyperlink so we can
          // jump to the proptype definition on the page.
          let variableName = prop.value.object ? prop.value.object.name : null;
          if (!variableName && prop.value.object) {
            variableName = prop.value.object.object
              ? prop.value.object.object.name
              : null;
          }
          const binding = variableName && path.scope.getBinding(variableName);
          if (binding && isLocalPropTypeRequire(binding.path.node)) {
            link = variableName;
            // propValue = propValue.replace(variableName, '<a href="#' + variableName + '">' + variableName + '</a>');
          }

          propTypes.push({
            name: propName,
            value: propValue,
            link: link
          });
        });
      }
    }
  });

  if (propTypes.length) {
    proptypesHtml += createPropTypesSection(
      componentName,
      '<code>&lt;' + componentName + '/&gt;</code>',
      propTypes,
      false
    );
  }

  return proptypesHtml;
}

function parsePropTypeFile(source, fileName) {
  let props = [];
  let proptypesHtml = '';
  fileName = fileName.replace('.js', '');

  const ast = babylon.parse(source, {
    sourceType: 'module',
    plugins: ['jsx', 'objectRestSpread']
  });

  traverse(ast, {
    enter(path) {
      const node = path.node;
      if (
        t.isMemberExpression(node.left) &&
        t.isIdentifier(node.left.object, { name: 'module' }) &&
        t.isIdentifier(node.left.property, { name: 'exports' }) &&
        t.isObjectExpression(node.right)
      ) {
        node.right.properties.forEach(prop => {
          const propName = prop.key.name;
          const binding = path.scope.getBinding(propName);
          const value = binding.path.node.init;
          let propValue = generate(value, { concise: false }, source).code;

          props.push({
            name: propName,
            source: source,
            value: propValue
          });
        });
      }
    }
  });

  if (props.length) {
    proptypesHtml += createPropTypesSection(
      fileName,
      '<code>' + fileName + '</code>',
      props,
      true
    );
  }

  return proptypesHtml;
}

function generatePropTypeDocs(packagesPath, pkg) {
  let proptypesHtml = '';
  let proptypeDefinitionsHtml = '';

  const sourceDir = path.resolve(packagesPath, pkg, 'src');

  if (!pathExists.sync(sourceDir)) {
    return;
  }

  const sourceFiles = fs.readdirSync(sourceDir);

  sourceFiles.forEach(fileName => {
    const sourcePath = path.join(sourceDir, fileName);
    const source = fs.readFileSync(sourcePath).toString();

    if (_.includes(fileName, 'PropTypes')) {
      proptypeDefinitionsHtml += parsePropTypeFile(source, fileName);
    } else {
      proptypesHtml += parseSourceFile(source, fileName);
    }
  });

  // show prop type definitions after component prop types
  proptypesHtml += proptypeDefinitionsHtml;

  return proptypesHtml;
}

export function examplesBuildHtml(cb) {
  const packagesPath = path.resolve(__dirname, 'packages');
  const packages = _.xor(
    exludedNewPackages,
    fs.readdirSync(packagesPath).filter(pkg => {
      return pkg.indexOf('cf-component-') > -1 ||
        pkg.indexOf('cf-builder-') > -1;
    })
  );

  let componentsHtml = '';
  let sidebarHtml = '';

  packages.forEach(pkg => {
    const examplesPath = path.resolve(packagesPath, pkg, 'example');

    if (!pathExists.sync(examplesPath)) {
      return;
    }

    const examples = fs.readdirSync(examplesPath);

    componentsHtml += '<h2 class="cf-example__heading" id="' +
      pkg +
      '">' +
      pkg +
      '</h2>';

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

      componentsHtml += '<div class="cf-example">' +
        '<div class="cf-example__content" id="' +
        pkg +
        '--' +
        example +
        '"></div>' +
        '<div class="cf-example__code">' +
        higlightedContent +
        '</div>' +
        '</div>';
    });

    sidebarHtml += '<a href="#' + pkg + '">' + pkg + '</a>';

    const propTypesHtml = generatePropTypeDocs(packagesPath, pkg);

    if (propTypesHtml.length) {
      componentsHtml += '<div class="cf-example__proptypes">' +
        propTypesHtml +
        '</div>';
    }
  });

  let styles;

  if (gutil.env.view === 'internal') {
    styles = '../../www-style/htdocs/static/stylesheets/components.css';
  } else if (gutil.env.view === 'external') {
    styles = 'styles.css';
  } else {
    throw new Error(
      'Not a valid view for styles. Needs --view [internal,external]'
    );
  }

  const html = '<!doctype html>' +
    '<html>' +
    '<head>' +
    '<meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width">' +
    '<title>Cloudflare Components</title>' +
    '<link rel="stylesheet" href="base.css">' +
    '<link rel="stylesheet" href="' +
    styles +
    '">' +
    '</head>' +
    '<body>' +
    '<header class="cf-example-header">' +
    '<a href="https://github.com/cloudflare/cf-ui">' +
    '<img src="assets/logo.png" alt="cf-ui" height="50"/>' +
    '</a>' +
    '</header>' +
    '<nav class="cf-example-sidebar">' +
    sidebarHtml +
    '</nav>' +
    '<div class="cf-example-content">' +
    componentsHtml +
    '</div>' +
    '<script type="text/javascript" src="vendor.js"></script>' +
    '<script type="text/javascript" src="bundle.js"></script>' +
    '</body>' +
    '</html>';

  mkdirp.sync(path.resolve(__dirname, 'docs'));
  fs.writeFileSync(path.resolve(__dirname, 'docs/index.html'), html);
  cb();
}

export const build = () => compile(false);

export const test = cb => initKarmaServer(true, cb);
const testWatch = cb => initKarmaServer(false, cb);

export function dev(cb) {
  watch(scripts, () => {
    compile(true);
  });
  testWatch(cb);
}

export function examplesBuildCss() {
  return gulp
    .src(exampleStyles)
    .pipe(sourcemaps.init())
    .pipe(postcss([require('autoprefixer'), require('cssnano')()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('docs'));
}

export function examplesBuildAssets() {
  return gulp.src(exampleAssets).pipe(gulp.dest('docs/assets'));
}

export const examplesClean = () => del(['docs']);

export const examplesBuildBundle = () => initBrowserifyBundle(false);
export const examplesBuildVendor = () => initBrowserifyVendor(false);
export const examplesDevBundle = () => initBrowserifyBundle(true);
export const examplesDevVendor = () => initBrowserifyVendor(true);

function logLocation(cb) {
  gutil.log(
    'Open "file://' +
      path.resolve(__dirname, 'docs/index.html') +
      '" in your browser'
  );
  cb();
}

export const examplesBuild = gulp.series(
  examplesClean,
  gulp.parallel(
    examplesBuildHtml,
    examplesBuildCss,
    examplesBuildAssets,
    examplesBuildBundle,
    examplesBuildVendor
  ),
  logLocation
);

export const examplesDev = gulp.series(
  examplesClean,
  build,
  gulp.parallel(
    examplesBuildHtml,
    examplesBuildCss,
    examplesBuildAssets,
    examplesDevBundle,
    examplesDevVendor
  ),
  logLocation,
  function examplesWatcher() {
    gulp.watch(exampleComponents, examplesBuildHtml);
    gulp.watch(exampleStyles, examplesBuildCss);
    gulp.watch(exampleAssets, examplesBuildAssets);
    gulp.watch(scripts, () => compile(true));
  }
);

function setViewExternal(cb) {
  gutil.env.view = 'external';
  cb();
}

export const examplesPublish = gulp.series(
  setViewExternal,
  examplesBuild,
  function examplesPublisher(cb) {
    execSync(
      [
        'cd docs',
        'git init',
        'git remote add origin git@github.com:cloudflare/cf-ui.git',
        'git add -A',
        'git commit -m "[Deploy]"',
        'git push origin master:gh-pages --force'
      ].join(' && ')
    );
    cb();
  }
);
