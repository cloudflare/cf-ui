// React
import React from 'react';
import ReactDOM from 'react-dom';

// Fela imports, minimal set of plugins that we recommend
import { createRenderer } from 'fela';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import lvha from 'fela-plugin-lvha';
import fontRenderer from 'fela-font-renderer';
import { Provider } from 'react-fela';

// cf-ui component
import { Button as ButtonUnstyled, ButtonTheme } from 'cf-component-button';

// our global consts (theme) and ThemeProvider, you might want to use your
// own global theme
import { variables } from 'cf-style-const';
import { ThemeProvider, applyTheme } from 'cf-style-container';

// cf-ui components export React components and themes, you have to combine
// them together first, we have our private set of wrapper components (cf-ux)
// that do just that, you might want to use your own theme
const Button = applyTheme(ButtonUnstyled, ButtonTheme);

// Empty DOM nodes for styles and React, note that everything can be server
// side rendered if you wish
const fontNode = document.getElementById('font-stylesheet');
const cssNode = document.getElementById('stylesheet');
const htmlNode = document.getElementById('react-app');

// creates a new renderer to render styles
// pick your own className prefix
const renderer = createRenderer({
  plugins: [prefixer(), fallbackValue(), unit(), lvha()],
  enhancers: [fontRenderer(fontNode)],
  selectorPrefix: ['foo-']
});

ReactDOM.render(
  <Provider renderer={renderer} mountNode={cssNode}>
    <ThemeProvider theme={variables}>
      <Button type="primary" onClick={() => console.log('clicked')}>
        Primary Button
      </Button>
    </ThemeProvider>
  </Provider>,
  htmlNode
);
