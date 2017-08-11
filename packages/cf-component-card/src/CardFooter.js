import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  fontSize: theme.fontSize,
  color: theme.color,
  lineHeight: theme.lineHeight,
  marginTop: theme.marginTop
});

const Footer = ({ className, children }) => (
  <div className={className}>{children}</div>
);

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};

export default createComponent(styles, Footer);
