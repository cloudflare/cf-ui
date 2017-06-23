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
import { variables } from 'cf-style-const';

const defaultOpts = {
  selectorPrefix: 'cf-',
  dev: false
};

const createRenderer = opts => {
  const usedOpts = Object.assign({}, defaultOpts, opts);
  const plugins = [
    prefixer(),
    fallbackValue(),
    unit(),
    lvha(),
    embedded(),
    namedMediaQuery({
      mobile: `@media (min-width: ${variables.breakpoints.mobile})`,
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

export default createRenderer;
