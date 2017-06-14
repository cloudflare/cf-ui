import React, {
  Component,
  Children,
  isValidElement,
  cloneElement
} from 'react';
import PropTypes from 'prop-types';
import { createRenderer as createFelaRenderer } from 'fela';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import lvha from 'fela-plugin-lvha';
import validator from 'fela-plugin-validator';
import embedded from 'fela-plugin-embedded';
import beautifier from 'fela-beautifier';
import monolithic from 'fela-monolithic';
import { Provider } from 'react-fela';
import { variables } from 'cf-style-const';
import { ThemeProvider } from 'cf-style-container';

const defaultOpts = {
  selectorPrefix: 'cf-',
  dev: false
};

export const createRenderer = opts => {
  const usedOpts = Object.assign({}, defaultOpts, opts);

  const plugins = [prefixer(), fallbackValue(), unit(), lvha(), embedded()];
  const enhancers = [];

  if (usedOpts.dev === true) {
    plugins.push(validator());
    enhancers.push(beautifier());
    enhancers.push(monolithic());
  }

  const renderer = createFelaRenderer({
    plugins,
    enhancers,
    selectorPrefix: [usedOpts.selectorPrefix]
  });

  return renderer;
};

export const StyleProvider = ({
  selectorPrefix,
  dev,
  children,
  ...restProps
}) => {
  const renderer = createRenderer({
    selectorPrefix,
    dev
  });
  const child = Children.only(children);
  return (
    <Provider renderer={renderer}>
      <ThemeProvider theme={variables}>
        {isValidElement(child) ? cloneElement(child, { ...restProps }) : child}
      </ThemeProvider>
    </Provider>
  );
};

StyleProvider.defaultProps = defaultOpts;
StyleProvider.propTypes = {
  dev: PropTypes.bool,
  selectorPrefix: PropTypes.string
};
