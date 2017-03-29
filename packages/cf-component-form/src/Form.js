import React, { PropTypes } from 'react';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  background: theme.background,
  border: theme.border,
  boxShadow: theme.boxShadow
});

const addLayoutProp = (children, layout) =>
  React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { layout });
    }
    return child;
  });

const Form = ({ children, layout, onSubmit, className }) => (
  <form className={className} onSubmit={onSubmit}>
    {addLayoutProp(children, layout)}
  </form>
);

Form.propTypes = {
  layout: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node
};

Form.displayName = 'Form';

export default createComponent(styles, Form);
