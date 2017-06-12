import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const radius = (borderRadius, group, spaced) => {
  if (spaced) {
    return { borderRadius };
  }
  if (group && !spaced) {
    return {
      borderTopRightRadius: group === 'last' ? borderRadius : 0,
      borderTopLeftRadius: group === 'first' ? borderRadius : 0,
      borderBottomLeftRadius: group === 'first' ? borderRadius : 0,
      borderBottomRightRadius: group === 'last' ? borderRadius : 0
    };
  }
  return { borderRadius };
};

const opacity = (loading, disabled) => {
  if (loading) {
    return { opacity: 0.8 };
  }
  if (disabled) {
    return { opacity: 0.5 };
  }
  return { opacity: 'inherit' };
};

const before = (fadeZoomIn, loading) => {
  if (!loading) {
    return null;
  }
  // this needs something better (e.g. a rotating icon)
  return {
    '&::before': {
      content: '"…"',
      color: 'black',
      display: 'block',
      position: 'absolute',
      top: '0.6em',
      left: 0,
      height: '100%',
      width: '100%',
      opacity: 1
    }
  };
};

const marginLeft = (marginLeft, group, spaced) => {
  if (!group) {
    return { marginLeft };
  }
  if (spaced && group !== 'first') {
    return { marginLeft: '0.4rem' };
  }
  return { marginLeft: 0 };
};

const styles = props => {
  const theme = props.theme;
  return {
    '&:hover': {
      backgroundColor: props.loading
        ? theme.disabledBackground
        : theme[`${props.type}HoverBackground`],
      borderColor: theme[`${props.type}HoverBorder`],
      color: props.loading
        ? theme.disabledBackground
        : theme[`${props.type}HoverColor`]
    },
    '&:active': {
      backgroundColor: theme[`${props.type}ActiveBackground`],
      borderColor: theme[`${props.type}ActiveBorder`],
      color: theme[`${props.type}ActiveColor`]
    },
    '&:focus': {
      backgroundColor: props.loading
        ? theme.backgroundColor
        : theme[`${props.type}Background`],
      boxShadow: `inset 0px 0px 0px ${theme.borderSize} ${theme[`${props.type}focusOutlineColor`]}`,
      color: props.loading
        ? theme.disabledBackground
        : theme[`${props.type}FocusColor`],
      outline: props.loading ? 'none' : 'inherit'
    },
    ...before(theme.fadeZoomIn, props.loading),
    '&[title]': {
      pointerEvents: props.disabled ? 'auto' : 'none'
    },
    backgroundColor: props.loading
      ? theme.disabledBackground
      : theme[`${props.type}Background`],
    borderBottom: theme.borderBottom,
    borderBottomWidth: theme.borderBottomWidth,
    borderColor: theme[`${props.type}Border`],
    borderLeft: props.group && props.group !== 'first' ? 0 : theme.borderLeft,
    borderRight: theme.borderRight,
    borderStyle: theme.borderStyle,
    borderTop: theme.borderTop,
    borderWidth: theme.borderWidth,
    color: props.loading
      ? theme.disabledBackground
      : theme[`${props.type}Color`],
    cursor: props.disabled || props.loading ? 'default' : theme.cursor,
    display: theme.display,
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize,
    fontWeight: theme.fontWeight,
    lineHeight: theme.lineHeight,
    marginBottom: props.group ? 0 : theme.marginBottom,
    marginRight: props.group ? 0 : theme.marginRight,
    marginTop: props.group ? 0 : theme.marginTop,
    ...marginLeft(theme.marginLeft, props.group, props.spaced),
    ...opacity(props.loading, props.disabled),
    paddingBottom: theme.paddingBottom,
    paddingLeft: theme.paddingLeft,
    paddingRight: theme.paddingRight,
    paddingTop: theme.paddingTop,
    pointerEvents: props.disabled ? 'none' : 'auto',
    position: theme.position,
    ...radius(theme.borderRadius, props.group, props.spaced),
    textAlign: theme.textAlign,
    transition: theme.transition,
    userSelect: theme.userSelect,
    float: theme.float,
    height: theme.height,
    maxWidth: theme.maxWidth
  };
};

class Button extends React.Component {
  render() {
    const {
      onClick,
      submit,
      className,
      disabled,
      loading,
      children
    } = this.props;
    return (
      <button
        type={submit ? 'submit' : 'button'}
        disabled={disabled || loading}
        className={className}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  submit: PropTypes.bool,
  spaced: PropTypes.bool,
  className: PropTypes.string.isRequired,
  group: PropTypes.oneOf(['first', 'inbetween', 'last']),
  type: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger'])
    .isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node
};

Button.defaultProps = {
  type: 'default',
  submit: false
};

Button.displayName = 'Button';

export default createComponent(styles, Button);
