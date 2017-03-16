import React, { PropTypes } from 'react';
import { createComponent } from 'cf-style-container';

const styles = ({ theme, size }) => {
  return {
    fontWeight: theme[`fontWeight${size}`] || theme.fontWeight,
    fontSize: theme[`fontSize${size}`] || theme.fontSize,
    lineHeight: theme[`lineHeight${size}`] || theme.lineHeight
  };
};

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
