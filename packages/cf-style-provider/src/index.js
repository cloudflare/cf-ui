import React, {
  Component,
  PropTypes,
  Children,
  isValidElement,
  cloneElement
} from 'react';
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

const defaultOpts = {
  selectorPrefix: 'cf-',
  dev: false,
  fontNode: undefined,
  cssNode: undefined
};

export const createRenderer = opts => {
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

export const StyleProvider = ({
  selectorPrefix,
  dev,
  cssNode,
  fontNode,
  children,
  ...restProps
}) => {
  const renderer = createRenderer({
    selectorPrefix,
    dev,
    fontNode
  });
  const child = Children.only(children);
  return (
    <Provider renderer={renderer} mountNode={cssNode}>
      <ThemeProvider theme={variables}>
        {isValidElement(child) ? cloneElement(child, { ...restProps }) : child}
      </ThemeProvider>
    </Provider>
  );
};

StyleProvider.defaultProps = defaultOpts;
StyleProvider.propTypes = {
  dev: React.PropTypes.bool,
  selectorPrefix: React.PropTypes.string,
  cssNode: React.PropTypes.object,
  fontNode: React.PropTypes.object,
  children: PropTypes.node.isRequired
};
