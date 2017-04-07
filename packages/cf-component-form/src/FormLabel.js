import React, { PropTypes } from 'react';
import { createComponent } from 'cf-style-container';

const styles = ({ theme, hidden }) => ({
  fontSize: theme.fontSize,
  display: hidden ? 'none' : 'block',
  marginBottom: theme.marginBottom,
  color: theme.color
});

class FormLabel extends React.Component {
  render() {
    const { children, className } = this.props;
    return (
      <label className={className}>
        {children}
      </label>
    );
  }
}

FormLabel.propTypes = {
  hidden: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

export default createComponent(styles, FormLabel);
