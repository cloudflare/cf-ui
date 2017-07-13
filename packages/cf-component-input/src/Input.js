import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  zIndex: theme.zIndex,
  width: theme.width,
  margin: theme.margin,
  padding: theme.padding,
  border: theme.border,
  borderRadius: theme.borderRadius,

  verticalAlign: theme.verticalAlign,
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize,

  background: theme.background,
  color: theme.color,
  outline: theme.outline,

  transition: theme.transition,

  '&:hover': {
    borderColor: theme['&:hover'].borderColor
  },

  '&:focus': {
    outline: theme['&:hover'].outline,
    outlineOffset: theme['&:hover'].outlineOffset
  }
});

class Input extends React.Component {
  render() {
    return <input {...this.props} />;
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'search']),
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  invalid: PropTypes.bool,
  className: PropTypes.string
};

Input.defaultProps = {
  type: 'text'
};

export default createComponent(styles, Input);
