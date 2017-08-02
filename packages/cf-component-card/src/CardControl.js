import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme, wide }) => ({
  position: 'relative',
  padding: wide ? 0 : '2rem',
  border: `0 solid ${theme.colorGrayLight}`,
  borderTopWidth: '1px',
  backgroundColor: 'rgba(0, 0, 0, 0.06)',
  textAlign: wide ? 'inherit' : 'center',

  tablet: {
    width: '40%',
    borderLeftWidth: '1px',
    borderTopWidth: 0,
    verticalAlign: 'middle',
    display: 'table-cell'
  },

  desktop: {
    width: '30%'
  }
});

const CardControl = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

CardControl.propTypes = {
  children: PropTypes.node,
  wide: PropTypes.bool
};

export default createComponent(styles, CardControl, ['wide']);
