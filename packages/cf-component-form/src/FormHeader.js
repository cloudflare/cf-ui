import React, { PropTypes } from 'react';
import { Heading } from 'cf-component-heading';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  padding: theme.padding,
  borderBottom: theme.borderBottom
});

const FormHeader = ({ className, title }) => (
  <div className={className}>
    <Heading size={4}>
      {title}
    </Heading>
  </div>
);

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default createComponent(styles, FormHeader);
