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
import namedMediaQuery from 'fela-plugin-named-media-query';
import { Provider } from 'react-fela';
import { variables } from 'cf-style-const';
import { ThemeProvider } from 'cf-style-container';

const defaultOpts = {
  selectorPrefix: 'cf-',
  dev: false
};

export const createRenderer = opts => {
  const usedOpts = Object.assign({}, defaultOpts, opts);
  const plugins = [
    prefixer(),
    fallbackValue(),
    unit(),
    lvha(),
    embedded(),
    namedMediaQuery({
      mobile: `@media (min-width: ${variables.breakpoints.modile})`,
      mobileWide: `@media (min-width: ${variables.breakpoints.mobileWide})`,
      tablet: `@media (min-width: ${variables.breakpoints.tablet})`,
      desktop: `@media (min-width: ${variables.breakpoints.desktop})`,
      desktopLarge: `@media (min-width: ${variables.breakpoints.desktopLarge})`
    })
  ];
  const enhancers = [];

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
