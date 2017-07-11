import React from 'react';
import PropTypes from 'prop-types';
import requiredIf from 'react-required-if';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  height: theme.height,
  wordBreak: theme.wordBreak,
  cursor: theme.cursor,
  resize: theme.resize,

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

const Textarea = props => <textarea {...props} />;
Textarea.displayName = 'Textarea';

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: requiredIf(
    PropTypes.func,
    props => !props.disabled && !props.readOnly
  ),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

export default createComponent(styles, Textarea, [
  'name',
  'value',
  'disabled',
  'readOnly',
  'onChange',
  'onFocus',
  'onBlur'
]);
