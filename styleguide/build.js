import React, { PropTypes } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-fela';
import Html from './components/html';
import Main from './components/main';
import { createRenderer } from './felaRenderer';

const renderer = createRenderer();

export default (locals, callback) => {
  const body = ReactDOMServer.renderToString(
    <Provider renderer={renderer}>
      <Main />
    </Provider>
  );

  const cssStyles = renderer.renderToString();
  const fontStyles = renderer.fontRenderer.renderToString();

  callback(
    null,
    `
    <!DOCTYPE html>
    ${ReactDOMServer.renderToStaticMarkup(<Html body={body} hash={locals.webpackStats.hash} cssStyles={cssStyles} fontStyles={fontStyles} />)}
  `
  );
};
