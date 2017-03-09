import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-fela';
import { createRenderer } from './felaRenderer';
import Main from './components/main';

const fontNode = document.getElementById('font-stylesheet');
const cssNode = document.getElementById('stylesheet');
const htmlNode = document.getElementById('app-root');

const renderer = createRenderer({ fontNode });

ReactDOM.render(
  <Provider renderer={renderer} mountNode={cssNode}>
    <Main />
  </Provider>,
  htmlNode
);

if (module.hot) {
  module.hot.accept('./components/main', () => {
    const NextApp = require('./components/main').default; // eslint-disable-line
    ReactDOM.render(
      <Provider renderer={renderer} mountNode={cssNode}>
        <NextApp />
      </Provider>,
      htmlNode
    );
  });
}
