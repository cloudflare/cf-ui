var fs = require('fs');
var path = require('path');
var express = require('express');
var pathExists = require('path-exists');

var vendor = process.argv[2];
var bundle = process.argv[3];

var packagesPath = path.resolve(__dirname, '../packages');
var packages = fs.readdirSync(packagesPath);

packages = packages.filter(function(pkg) {
  return pkg.indexOf('cf-component-') > -1;
});

var componentsHtml = '';

packages.map(function(pkg) {
  componentsHtml += '<h2>' + pkg + '</h2>';

  var examplesPath = path.resolve(packagesPath, pkg, 'example');
  var examples = fs.readdirSync(examplesPath);

  examples.forEach(function(example) {
    if (example !== 'basic') {
      componentsHtml += '<p>' + example + '</p>';
    }
    componentsHtml += '<div class="cf-example" id="' + pkg + '--' + example + '"></div>';
  });
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
    '    <title>CloudFlare Components</title>',
    '    <link rel="stylesheet" href="/assets/base.css">',
    '    <link rel="stylesheet" href="' + styles + '">',
    '  </head>',
    '  <body>',
    '    <h1>CloudFlare Components</h1>',
    '    ' + componentsHtml,
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
