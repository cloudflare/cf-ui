import React from 'react';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  margin: '0.53333rem 0',
  borderTop: `1px solid ${theme.colorGrayLight}`
});

const DropdownSeparator = ({ className }) => (
  <div className={className} role="separator" />
);

export default createComponent(styles, DropdownSeparator);
