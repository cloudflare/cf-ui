import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  zIndex: theme.zIndex,
  width: theme.width,
  height: theme.height,
  margin: theme.margin,
  padding: theme.padding,
  border: theme.border,
  borderRadius: theme.borderRadius,
  flex: theme.flex,

  verticalAlign: theme.verticalAlign,
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize,

  background: theme.background,
  color: theme.color,
  outline: theme.outline,

  transition: theme.transition,
  textIndent: theme.textIndent,

  '&:hover': {
    borderColor: theme['&:hover'].borderColor
  },

  '&:focus': {
    borderColor: theme['&:hover'].borderColor,
    outline: theme['&:hover'].outline
  }
});

class Input extends React.Component {
  render() {
    const { inputRef, ...restProps } = this.props;
    return <input {...restProps} ref={inputRef} />;
  }
}

Input.propTypes = {
  type: PropTypes.oneOf([
    'text',
    'email',
    'number',
    'password',
    'search',
    'color'
  ]),
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  inputRef: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool
};

Input.defaultProps = {
  type: 'text'
};

export default createComponent(styles, Input);
