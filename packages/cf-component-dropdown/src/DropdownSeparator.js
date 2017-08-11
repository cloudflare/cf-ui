import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  margin: '0.53333rem 0',
  borderTop: `1px solid ${theme.colorGrayLight}`
});

const DropdownSeparator = ({ className }) => (
  <div className={className} role="separator" />
);

DropdownSeparator.propTypes = {
  className: PropTypes.string
};

export default createComponent(styles, DropdownSeparator);
