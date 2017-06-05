import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme, size }) => ({
  fontWeight: theme[`fontWeight${size}`],
  fontSize: theme[`fontSize${size}`],
  lineHeight: theme[`lineHeight${size}`],
  marginTop: theme[`marginTop${size}`],
  paddingTop: theme.paddingTop,
  paddingBottom: theme.paddingBottom,
  paddingLeft: theme.paddingLeft,
  paddingRight: theme.paddingRight
});

const Heading = ({ size, className, children }) => {
  const tagName = 'h' + size;
  return React.createElement(tagName, { className }, children);
};

Heading.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default createComponent(styles, Heading);
