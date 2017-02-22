import React from 'react';
import path from 'path';
import fs from 'fs';

const isProduction = process.env.NODE_ENV === 'production';

const buildDir = isProduction ? fs.readdirSync(path.resolve(__dirname, '../../build')) : '';
const appJS = isProduction ? buildDir.find(file => /^app-\w+\.js$/.test(file)) : '';
const scripts = isProduction ? `/build/${appJS}` : '//localhost:8080/build/app.js';

const Html = () =>
  <html lang="en-US">
    <head>
      <meta charSet="utf-8" />
      <title>cf-ui styleguide</title>
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/default.min.css" />
      <style id="stylesheet"></style>
      <style id="font-stylesheet"></style>
    </head>
    <body>
      <div id="app-root" />
      <script src={scripts} type="text/javascript" />
    </body>
  </html>;

Html.displayName = 'Html';
export default Html;
