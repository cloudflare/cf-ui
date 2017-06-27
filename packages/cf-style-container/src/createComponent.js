import { extractPassThroughProps, resolvePassThrough } from 'fela-utils';
import { createElement } from 'react';
import PropTypes from 'prop-types';

function createComponentFactory(createElement, contextTypes) {
  return function createComponent(rule, type, passThroughProps) {
    const componentName = typeof type === 'string'
      ? type
      : type.displayName || type.name || '';

    const FelaComponent = ({ children, ...ruleProps }, { renderer, theme }) => {
      if (!renderer) {
        throw new Error(
          "createComponent() can't render styles without the renderer in the context. Wrap the root of your app with <StyleProvider />."
        );
      }

      if (!theme) {
        throw new Error(
          "createComponent() can't render styles without the theme in the context. Wrap the root of your app with <StyleProvider />."
        );
      }

      // compose passThrough props from arrays or functions
      const resolvedPassThrough = [
        ...resolvePassThrough(passThroughProps, ruleProps)
      ];

      if (ruleProps.className) {
        console.warn(`You cannot restyle Fela component ${componentName}`);
      }

      const componentProps = extractPassThroughProps(
        resolvedPassThrough,
        ruleProps
      );

      ruleProps.theme = theme || {};

      if (ruleProps.style) {
        componentProps.style = ruleProps.style;
      }

      componentProps.className = renderer.renderRule(rule, ruleProps);

      if (ruleProps.id) {
        componentProps.id = ruleProps.id;
      }

      if (ruleProps.innerRef) {
        componentProps.ref = ruleProps.innerRef;
      }

      const customType = ruleProps.is || type;

      return createElement(customType, componentProps, children);
    };

    if (type.propTypes) {
      FelaComponent.propTypes = type.propTypes;
      FelaComponent.propTypes.className = PropTypes.string;
    }

    if (contextTypes) {
      FelaComponent.contextTypes = contextTypes;
    }

    // use the rule name as display name to better debug with react inspector
    FelaComponent.displayName = componentName;
    FelaComponent._isFelaComponent = true;

    return FelaComponent;
  };
}

export default createComponentFactory(createElement, {
  renderer: PropTypes.object,
  theme: PropTypes.object
});
