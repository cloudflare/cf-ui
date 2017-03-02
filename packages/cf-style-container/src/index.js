import React, { Component, PropTypes } from 'react';
import {
  createComponent as createFelaComponent,
  ThemeProvider
} from 'react-fela';

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

export { createComponent, applyTheme, ThemeProvider };
