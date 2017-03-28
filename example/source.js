import React from 'react';
import ReactDOM from 'react-dom';
import { Button as ButtonUnstyled, ButtonTheme } from 'cf-component-button';
import { applyTheme } from 'cf-style-container';
import { StyleProvider } from '../packages/cf-style-provider/src/';

// cf-ui components export React components and themes, you have to combine
// them together first, we have our private set of wrapper components (cf-ux)
// that do just that, you might want to use your own theme
const Button = applyTheme(ButtonUnstyled, ButtonTheme);

// Empty DOM nodes for styles and React, note that everything can be server
// side rendered if you wish
const fontNode = document.getElementById('font-stylesheet');
const cssNode = document.getElementById('stylesheet');
const htmlNode = document.getElementById('react-app');

ReactDOM.render(
  <StyleProvider cssNode={cssNode} fontNode={fontNode}>
    <Button type="primary" onClick={() => console.log('clicked')}>
      Primary Button
    </Button>
  </StyleProvider>,
  htmlNode
);
