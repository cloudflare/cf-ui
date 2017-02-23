import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-fela';
import { createRenderer } from './felaRenderer';
import Main from './main';

const fontNode = document.getElementById('font-stylesheet');
const cssNode = document.getElementById('stylesheet');
const htmlNode = document.getElementById('app-root');

const renderer = createRenderer(fontNode);

ReactDOM.render(
  <Provider renderer={renderer} mountNode={cssNode}>
    <Main />
  </Provider>,
  htmlNode
);

if (module.hot) {
  module.hot.accept('./main', () => {
    const NextApp = require('./main').default; // eslint-disable-line
    ReactDOM.render(
      <Provider renderer={renderer} mountNode={htmlNode}>
        <NextApp />
      </Provider>,
      htmlNode
    );
  });
}