import React, {PropTypes} from 'react';
import {createComponent} from 'cf-style-container';

const getRadius = (borderRadius, group) => {
  if (group) {
    return {
      borderTopRightRadius: group === 'last' ? borderRadius : 0,
      borderTopLeftRadius: group === 'first' ? borderRadius : 0,
      borderBottomLeftRadius: group === 'first' ? borderRadius : 0,
      borderBottomRightRadius: group === 'last' ? borderRadius : 0
    };
  }
  return { borderRadius };
};

const styles = props => {
  const theme = props.theme;
  return Object.assign({
    font: theme.font,
    fontWeight: theme.fontWeight,
    borderTop: theme.border,
    borderLeft: (props.group && props.group !== 'first') ? 0 : theme.border,
    borderRight: theme.border,
    borderBottom: theme.border,
    paddingTop: theme.paddingTop,
    paddingRight: theme.paddingRight,
    paddingBottom: theme.paddingBottom,
    paddingLeft: theme.paddingLeft,
    marginTop: props.group ? 0 : theme.marginTop,
    marginRight: props.group ? 0 : theme.marginRight,
    marginBottom: props.group ? 0 : theme.marginBottom,
    marginLeft: props.group ? 0 : theme.marginLeft,
    cursor: theme.cursor,
    color: theme.color,
    borderWidth: theme.borderWidth,
    borderStyle: theme.borderStyle,
    borderColor: theme.borderColor,
    borderBottomWidth: theme.borderBottomWidth,
    boxShadow: theme.boxShadow,
    background: theme[`background${props.type.charAt(0).toUpperCase() + props.type.slice(1)}`]
  }, getRadius(theme.borderRadius, props.group));
};

const Button = ({
  onClick,
  submit,
  className,
  disabled,
  loading,
  children
}) =>
  <button
    type={submit ? 'submit' : 'button'}
    disabled={disabled || loading}
    className={className}
    onClick={onClick}
  >
    {children}
  </button>;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  submit: PropTypes.bool,
  className: PropTypes.string.isRequired,
  group: PropTypes.oneOf([
    'first',
    'inbetween',
    'last'
  ]),
  type: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'warning',
    'danger'
  ]).isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node
};

Button.defaultProps = {
  type: 'default',
  submit: false
};

export default createComponent(styles, Button);
