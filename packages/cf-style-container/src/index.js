import React, { Component, PropTypes } from 'react';
import cssColorFunction from 'css-color-function';
import { combineRules } from 'fela';
import {
  createComponent as createFelaComponent,
  ThemeProvider,
  connect
} from 'react-fela';

const color = input => cssColorFunction.convert(`color(${input})`);

const createComponent = (rule, type = 'div', passThroughProps = []) =>
  createFelaComponent(
    rule,
    type,
    type.propTypes
      ? passThroughProps.concat(Object.keys(type.propTypes))
      : passThroughProps
  );

const applyTheme = (ComponentToWrap, theme) => {
  class ThemedComponent extends Component {
    getChildContext() {
      return {
        theme: {
          ...(this.context.theme || {}),
          ...theme(this.context.theme)
        }
      };
    }

    render() {
      return <ComponentToWrap {...this.props} />;
    }
  }

  ThemedComponent.childContextTypes = { theme: PropTypes.object };
  ThemedComponent.contextTypes = { theme: PropTypes.object };
  return ThemedComponent;
};

const createComponentStyles = (styleFunctions, component) => {
  const mapStylesToProps = props =>
    renderer => {
      const toRender = {};
      for (const style in styleFunctions) {
        toRender[style] = renderer.renderRule(styleFunctions[style], props);
      }
      return toRender;
    };
  return connect(mapStylesToProps)(component);
};

export {
  createComponent,
  applyTheme,
  ThemeProvider,
  color,
  connect,
  combineRules,
  createComponentStyles
};
