import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = props => {
  const theme = props.theme;
  return {
    borderRadius: theme.borderRadius,
    color: theme.color,
    display: theme.display,
    fontSize: theme.fontSize,
    fontWeight: theme.fontWeight,
    lineHeight: theme.lineHeight,
    paddingTop: theme.paddingTop,
    paddingRight: theme.paddingRight,
    paddingBottom: theme.paddingBottom,
    paddingLeft: theme.paddingLeft,
    textTransform: theme.textTransform,
    userSelect: theme.userSelect,
    verticalAlign: theme.verticalAlign,
    '-webkit-text-stroke': theme.webkitTextStroke,
    whiteSpace: theme.whiteSpace,
    backgroundColor: theme[`${props.type}BackgroundColor`]
  };
};

class Label extends React.Component {
  render() {
    const { children, className } = this.props;
    return (
      <span className={className}>
        {children}
      </span>
    );
  }
}

Label.propTypes = {
  type: PropTypes.oneOf(['default', 'info', 'success', 'warning', 'error'])
    .isRequired,
  children: PropTypes.node
};

export default createComponent(styles, Label);
