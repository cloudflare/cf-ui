import React, { PropTypes } from 'react';

const isProduction = process.env.NODE_ENV === 'production';

const Html = ({ body, hash, cssStyles, fontStyles }) => (
  <html lang="en-US">
    <head>
      <meta charSet="utf-8" />
      <title>cf-ui styleguide</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/default.min.css"
      />
      <style id="stylesheet">{cssStyles}</style>
      <style id="font-stylesheet">{fontStyles}</style>
    </head>
    <body>
      <div id="app-root" dangerouslySetInnerHTML={{ __html: body }} />
      <script
        src={hash ? `app-${hash}.js` : '//localhost:8080/build/app.js'}
        type="text/javascript"
      />
    </body>
  </html>
);

Html.displayName = 'Html';
Html.propTypes = {
  body: PropTypes.string,
  hash: PropTypes.string,
  cssStyles: PropTypes.string,
  fontStyles: PropTypes.string
};
export default Html;
