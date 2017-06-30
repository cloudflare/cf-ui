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
import whitelistMediaQuery from './whitelistMediaQuery';
import { variables } from 'cf-style-const';

const defaultOpts = {
  dev: false
};

const mediaQueries = {
  mobile: `@media (min-width: ${variables.breakpoints.mobile})`,
  mobileWide: `@media (min-width: ${variables.breakpoints.mobileWide})`,
  tablet: `@media (min-width: ${variables.breakpoints.tablet})`,
  desktop: `@media (min-width: ${variables.breakpoints.desktop})`,
  desktopLarge: `@media (min-width: ${variables.breakpoints.desktopLarge})`
};

const removePrefix = query => query.replace('@media ', '');

const createRenderer = opts => {
  const usedOpts = Object.assign({}, defaultOpts, opts);
  const plugins = [
    prefixer(),
    fallbackValue(),
    unit(),
    lvha(),
    embedded(),
    namedMediaQuery(mediaQueries)
  ];
  const enhancers = [];

  if (usedOpts.dev === true) {
    plugins.push(validator());
    plugins.push(whitelistMediaQuery(mediaQueries));
    enhancers.push(beautifier());
    enhancers.push(monolithic());
  }

  return createFelaRenderer({
    plugins,
    enhancers,
    mediaQueryOrder: [
      removePrefix(mediaQueries.mobile),
      removePrefix(mediaQueries.mobileWide),
      removePrefix(mediaQueries.tablet),
      removePrefix(mediaQueries.desktop),
      removePrefix(mediaQueries.desktopLarge)
    ]
  });
};

export default createRenderer;
