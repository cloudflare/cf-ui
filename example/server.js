var fs = require('fs');
var path = require('path');
var express = require('express');
var pathExists = require('path-exists');
var Highlights = require('highlights');
var highlighter = new Highlights();

highlighter.requireGrammarsSync({
  modulePath: require.resolve('language-babel/package.json')
});

var vendor = process.argv[2];
var bundle = process.argv[3];

var packagesPath = path.resolve(__dirname, '../packages');
var packages = fs.readdirSync(packagesPath);

packages = packages.filter(function(pkg) {
  return pkg.indexOf('cf-component-') > -1;
});

var componentsHtml = '';
var sidebarHtml = '';

packages.forEach(function(pkg) {
  var examplesPath = path.resolve(packagesPath, pkg, 'example');

  if (!pathExists.sync(examplesPath)) {
    return;
  }

  var examples = fs.readdirSync(examplesPath);

  componentsHtml += '<h2 id="' + pkg + '">' + pkg + '</h2>';

  examples.forEach(function(example) {
    var contentPath = path.join(examplesPath, example, 'component.js');
    var content = fs.readFileSync(contentPath).toString()

    content = highlighter.highlightSync({
      fileContents: content,
      filePath: contentPath,
      scopeName: 'source.js'
    });

    if (example !== 'basic') {
      componentsHtml += '<p>' + example + '</p>';
    }

    componentsHtml += (
      '<div class="cf-example">' +
      '  <div class="cf-example__content" id="' + pkg + '--' + example + '"></div>' +
      '  <div class="cf-example__code">' + content + '</div>' +
      '</div>'
    );
  });

  sidebarHtml += '<a href="#' + pkg + '">' + pkg + '</a>';
});

var app = express();

var wwwStyleExists = pathExists.sync(path.resolve(__dirname, 'www-style'));
var styles;

if (wwwStyleExists) {
  styles = '/assets/www-style/stylesheets/components.css';
} else {
  styles = '/assets/styles.css';
}

app.get('/', function(req, res) {
  res.send([
    '<!doctype html>',
    '<html>',
    '  <head>',
    '    <meta name="viewport" content="width=device-width">',
    '    <title>CloudFlare Components</title>',
    '    <link rel="stylesheet" href="/assets/base.css">',
    '    <link rel="stylesheet" href="' + styles + '">',
    '  </head>',
    '  <body>',
    '    <header class="cf-example-header">cf-ui</header>',
    '    <nav class="cf-example-sidebar">' + sidebarHtml + '</nav>',
    '    <div class="cf-example-content">' + componentsHtml + '</div>',
    '    <script type="text/javascript" src="/vendor.js"></script>',
    '    <script type="text/javascript" src="/bundle.js"></script>',
    '  </body>',
    '</html>'
  ].join('\n'));
});

app.get('/bundle.js', function(req, res) {
  res.sendFile(bundle);
});

app.get('/vendor.js', function(req, res) {
  res.sendFile(vendor);
});

app.use('/assets', express.static(__dirname));

app.listen(8000);
console.log('Listening at http://localhost:8000/');
