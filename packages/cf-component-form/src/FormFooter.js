import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  padding: theme.padding,
  borderTop: theme.borderTop,
  textAlign: theme.textAlign
});

class FormFooter extends React.Component {
  render() {
    const { className, children } = this.props;
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}

FormFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default createComponent(styles, FormFooter);
