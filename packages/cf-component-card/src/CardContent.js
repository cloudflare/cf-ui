import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = () => ({
  padding: '1.5rem',

  tablet: {
    display: 'table-cell'
  }
});

const CardContent = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

CardContent.propTypes = {
  children: PropTypes.node
};

export default createComponent(styles, CardContent);
