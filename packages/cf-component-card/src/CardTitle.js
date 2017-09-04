import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  fontWeight: theme.fontWeight,
  marginBottom: theme.marginBottom
});

const Title = ({ children, className }) => (
  <h3 className={className}>{children}</h3>
);

Title.propTypes = {
  className: PropTypes.node,
  children: PropTypes.string
};

export default createComponent(styles, Title);
