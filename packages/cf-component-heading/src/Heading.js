import React, { PropTypes } from 'react';
import { createComponent } from 'cf-style-container';

const styles = ({ theme, size }) => {
  const t = {};

  if (theme[`fontWeight${size}`]) {
    t.fontWeight = theme[`fontWeight${size}`];
  }

  if (theme[`fontSize${size}`]) {
    t.fontSize = theme[`fontSize${size}`];
  }

  if (theme[`lineHeight${size}`]) {
    t.lineHeight = theme[`lineHeight${size}`];
  }

  if (theme[`marginTop${size}`]) {
    t.marginTop = theme[`marginTop${size}`];
  }
  return t;
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
