import { createRenderer as createFelaRenderer } from 'fela';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import lvha from 'fela-plugin-lvha';
import validator from 'fela-plugin-validator';
import beautifier from 'fela-beautifier';
import fontRenderer from 'fela-font-renderer';
import monolithic from 'fela-monolithic';

export const createRenderer = opts => {
  const enhancers = [beautifier()];
  if (opts && opts.fontNode) {
    enhancers.push(fontRenderer(opts.fontNode));
  } else {
    enhancers.push(fontRenderer());
  }
  if (opts && opts.useMonolithic) {
    enhancers.push(monolithic());
  }
  return createFelaRenderer({
    plugins: [prefixer(), fallbackValue(), unit(), lvha(), validator()],
    enhancers,
    selectorPrefix: ['cf-']
  });
};
