import { extractPassThroughProps, resolvePassThrough } from 'fela-utils';
import { createElement } from 'react';
import PropTypes from 'prop-types';

function createComponentFactory(createElement, contextTypes) {
  return function createComponent(rule, type, passThroughProps) {
    const displayName = rule.name ? rule.name : 'FelaComponent';

    const FelaComponent = ({ children, ...ruleProps }, { renderer, theme }) => {
      if (!renderer) {
        throw new Error(
          "createComponent() can't render styles without the renderer in the context. Missing react-fela's <Provider /> at the app root?"
        );
      }

      const componentName = typeof type === 'string'
        ? type
        : type.displayName || type.name || '';

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

      if (ruleProps.className) {
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

    if (contextTypes) {
      FelaComponent.contextTypes = contextTypes;
    }

    // use the rule name as display name to better debug with react inspector
    FelaComponent.displayName = displayName;
    FelaComponent._isFelaComponent = true;

    return FelaComponent;
  };
}

export default createComponentFactory(createElement, {
  renderer: PropTypes.object,
  theme: PropTypes.object
});
