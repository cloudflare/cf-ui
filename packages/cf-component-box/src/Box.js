import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';
import propertiesSpec from './propertiesSpec';

const propertyNames = Object.keys(propertiesSpec);

// Generates styles given the provided props.
//
// This is driven by the metadata provided in propertiesSpec
// and produces a data structure like this:
//
// {
//   margin: props.margin || props.theme['margin']
//   width: props.width || props.theme['width']
//   ...
// }
//
// See propertySpec.js for more detail
//
const styles = props => {
  let styles = {};

  const propKeys = Object.keys(props);

  propKeys.forEach(name => {
    // Lookup the spec for the property
    const spec = propertiesSpec[name];

    // Ignore non-style props
    if (spec === undefined) {
      return;
    }

    // Get the style value from props
    let value = props[name];

    // pre-process the value with all pre-processors
    if (spec.preprocessWith) {
      spec.preprocessWith.forEach(fn => {
        value = fn(value);
      });
    }

    styles[name] = value;
  });

  // Only do checks in dev mode
  if (process.env.NODE_ENV !== 'production') {
    checkForViolations(styles);
  }

  return styles;
};

const Box = props => {
  const { className, children } = props;

  // Render the div with the fela classname
  return (
    <div className={className}>
      {children}
    </div>
  );
};

const checkForViolations = props => {
  // Check for conflicts given the spec's conflictsWith property
  // See propertySpec.js for more detail
  propertyNames.forEach(propName => {
    const spec = propertiesSpec[propName];
    if (!props[propName] || !spec.conflictsWith) return;

    spec.conflictsWith.forEach(otherPropName => {
      if (props[propName] && props[otherPropName]) {
        const msg = `${propName} cannot be set in conjunction with ${otherPropName}`;
        console.error(msg);
      }
    });
  });

  // TODO: To pull this check off, we'll need re-evaluate our baseline.
  // current is 22.5px
  // checkLineHeightViolations(props);
};

const checkLineHeightViolations = props => {
  const rem2px = rem => {
    return parseFloat(rem) * props.fontSize;
  };

  const baseline = props.lineHeight * props.fontSize;

  // Calculate total margin, padding, and border
  let totalMargin = 0;
  if (props.margin) {
    totalMargin = rem2px(props.margin);
  } else {
    totalMargin += rem2px(props.marginTop) || 0;
    totalMargin += rem2px(props.marginBottom) || 0;
  }

  let totalPadding = 0;
  if (props.padding) {
    totalPadding = rem2px(props.padding);
  } else {
    totalPadding += rem2px(props.paddingTop) || 0;
    totalPadding += rem2px(props.paddingBottom) || 0;
  }

  let totalBorder = 0;
  if (props.borderHeight) {
    totalBorder = rem2px(props.borderHeight);
  } else {
    totalBorder += rem2px(props.borderTopHeight) || 0;
    totalBorder += rem2px(props.borderBottomHeight) || 0;
  }

  // Warn the user if the total spacing isn't a multiple of the baseline
  const spacing = totalMargin + totalBorder + totalPadding;
  if (spacing && baseline % spacing !== 0) {
    console.warn(
      `Spacing from padding, border, and margin surrounding element should be a multiple of baseline ${baseline}.`
    );
  }
};

// Extract proptypes from the propertiesSpec
const extractPropTypes = () => {
  let propTypes = {};

  // Loop through all property specs and pluck the prop type
  propertyNames.forEach(name => {
    propTypes[name] = propertiesSpec[name].propType;
  });

  return propTypes;
};

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  ...extractPropTypes()
};

export default createComponent(styles, Box);
