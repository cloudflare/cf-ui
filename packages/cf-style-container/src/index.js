import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { combineRules } from 'fela';
import {
  createComponent as createFelaComponent,
  ThemeProvider,
  connect
} from 'react-fela';
import mergeOptions from 'merge-options';

const createComponent = (rule, type = 'div', passThroughProps = []) =>
  createFelaComponent(
    rule,
    type,
    type.propTypes
      ? passThroughProps.concat(Object.keys(type.propTypes))
      : passThroughProps
  );

const applyTheme = (ComponentToWrap, primaryTheme = () => {}, ...themes) => {
  class ThemedComponent extends Component {
    getChildContext() {
      const contextTheme = this.context.theme || {};
      let resultTheme = { ...contextTheme, ...primaryTheme(contextTheme) };
      for (const theme of themes) {
        if (theme) {
          resultTheme = { ...mergeOptions(resultTheme, theme(contextTheme)) };
        }
      }
      return {
        theme: {
          ...resultTheme
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

const createComponentStyles = (styleFunctions, component) =>
  connect(styleFunctions)(component);

export {
  createComponent,
  applyTheme,
  ThemeProvider,
  connect,
  combineRules,
  createComponentStyles
};
