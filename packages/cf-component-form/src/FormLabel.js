import React, { PropTypes } from 'react';
import { createComponent } from 'cf-style-container';

const styles = ({ theme, hidden }) => ({
  fontSize: theme.fontSize,
  display: hidden ? 'none' : 'block',
  marginBottom: theme.marginBottom,
  color: theme.color
});

const FormLabel = ({ children, className }) => (
  <label className={className}>
    {children}
  </label>
);

FormLabel.propTypes = {
  hidden: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

export default createComponent(styles, FormLabel);
