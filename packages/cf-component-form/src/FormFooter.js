import React, { PropTypes } from 'react';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  padding: theme.padding,
  borderTop: theme.borderTop,
  textAlign: theme.textAlign
});

const FormFooter = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

FormFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default createComponent(styles, FormFooter);
