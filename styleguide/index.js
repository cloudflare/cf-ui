import React from 'react';
import ReactDOM from 'react-dom';
import { createRenderer } from 'fela';
import { Provider } from 'react-fela';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import lvha from 'fela-plugin-lvha';
import validator from 'fela-plugin-validator';
import beautifier from 'fela-beautifier';
import fontRenderer from 'fela-font-renderer';
import Main from './main';

const fontNode = document.getElementById('font-stylesheet');
const cssNode = document.getElementById('stylesheet');
const htmlNode = document.getElementById('app-root');

const renderer = createRenderer({
  plugins: [
    prefixer(),
    fallbackValue(),
    unit(),
    lvha(),
    validator()
  ],
  enhancers: [
    beautifier(),
    fontRenderer(fontNode)
  ],
  selectorPrefix: ['cf-']
});

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