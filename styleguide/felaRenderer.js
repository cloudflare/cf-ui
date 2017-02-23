import { createRenderer as createFelaRenderer } from 'fela';
import prefixer from 'fela-plugin-prefixer';
import fallbackValue from 'fela-plugin-fallback-value';
import unit from 'fela-plugin-unit';
import lvha from 'fela-plugin-lvha';
import validator from 'fela-plugin-validator';
import beautifier from 'fela-beautifier';
import fontRenderer from 'fela-font-renderer';

export const createRenderer = fontNode => createFelaRenderer({
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
