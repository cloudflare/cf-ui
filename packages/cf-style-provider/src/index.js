import React, { Component, PropTypes, Children } from 'react';
import { createRenderer as createFelaRenderer } from 'fela';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import lvha from 'fela-plugin-lvha';
import fontRenderer from 'fela-font-renderer';
import validator from 'fela-plugin-validator';
import beautifier from 'fela-beautifier';
import monolithic from 'fela-monolithic';
import { Provider } from 'react-fela';
import { variables } from 'cf-style-const';
import { ThemeProvider } from 'cf-style-container';

export const createRenderer = opts => {
  const defaultOpts = {
    selectorPrefix: 'cf-',
    dev: false
  };
  const usedOpts = Object.assign({}, defaultOpts, opts);
  const plugins = [prefixer(), fallbackValue(), unit(), lvha()];
  const enhancers = [fontRenderer(usedOpts.fontNode)];

  if (usedOpts.dev === true) {
    plugins.push(validator());
    enhancers.push(beautifier());
    enhancers.push(monolithic());
  }

  return createFelaRenderer({
    plugins,
    enhancers,
    selectorPrefix: [usedOpts.selectorPrefix]
  });
};

export const createProvider = opts => {
  const renderer = createRenderer(opts);
  const cssNode = opts && opts.cssNode ? opts.cssNode : undefined;
  return class StyleProvider extends Component {
    render() {
      return (
        <Provider renderer={renderer} mountNode={cssNode}>
          <ThemeProvider theme={variables}>
            {Children.only(this.props.children)}
          </ThemeProvider>
        </Provider>
      );
    }
  };
};
