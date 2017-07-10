import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { combineRules } from 'fela';
import { ThemeProvider, connect } from 'react-fela';
import { static as Immutable } from 'seamless-immutable';
import { capitalize } from 'underscore.string';
import createFelaComponent from './createComponent';

const createComponent = (rule, type = 'div', passThroughProps = []) =>
  createFelaComponent(
    rule,
    type,
    type.propTypes
      ? passThroughProps.concat(Object.keys(type.propTypes))
      : passThroughProps
  );

const mergeThemes = (baseTheme, ...themes) => ({
  theme: (themes &&
    themes.reduce((acc, theme) => {
      if (typeof theme === 'function') {
        return Immutable.merge(acc, Immutable(theme(baseTheme)), {
          deep: true
        });
      } else if (typeof theme === 'object') {
        return Immutable.merge(acc, Immutable(theme), { deep: true });
      }
      throw new Error('theme must be either a function or an object');
    }, Immutable(baseTheme))) ||
    Immutable(baseTheme)
});

const applyTheme = (ComponentToWrap, ...themes) => {
  class ThemedComponent extends Component {
    getChildContext() {
      const contextTheme = this.context.theme || {};
      return mergeThemes(contextTheme, ...themes);
    }

    render() {
      return <ComponentToWrap {...this.props} />;
    }
  }

  ThemedComponent.displayName = `Themed${ComponentToWrap.displayName}`;
  ThemedComponent.childContextTypes = { theme: PropTypes.object };
  ThemedComponent.contextTypes = { theme: PropTypes.object };
  return ThemedComponent;
};

const createComponentStyles = (styleFunctions, component) =>
  connect(styleFunctions)(component);

export {
  createComponent,
  mergeThemes,
  applyTheme,
  ThemeProvider,
  connect,
  combineRules,
  createComponentStyles,
  capitalize
};

// Loops the key-value pairs of a props object, and apply a filter function to
// every pair. The returned value from the filter function will be reduced back
// to a single object.
export const filterProps = (props, filter) =>
  Object.keys(props)
    .map(key => [key, props[key]])
    .reduce((accum, [key, value]) => filter(key, value, accum), {});

// Filter out all the keys with null or undefined values
export const filterNone = props =>
  filterProps(props, (key, value, accum) => {
    if (value == null) return accum;
    accum[key] = value;
    return accum;
  });

// Filter out all the style attribute from the props
export const filterStyle = props =>
  filterProps(props, (key, value, accum) => {
    if (key === 'style') return accum;
    accum[key] = value;
    return accum;
  });

export const mapChildren = (children, func) =>
  React.Children
    .toArray(children)
    .map((child, index, children) => func(child, index, children));
