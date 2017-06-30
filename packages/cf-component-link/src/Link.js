import React from 'react';
import PropTypes from 'prop-types';
import { routeTo } from 'cf-util-route-handler';
import { createComponent } from 'cf-style-container';

class Link extends React.Component {
  constructor(props, context) {
    if (!props.to && !props.onClick) {
      throw new Error('<Link/> requires either a `to` or `onClick` prop');
    }

    super(props, context);

    this.handleClick = this.handleClick.bind(this);
    this.focus = this.focus.bind(this);
  }

  focus() {
    this.link.focus();
  }

  handleClick(e) {
    e.preventDefault();

    if (this.props.disabled) {
      return;
    }

    if (this.props.to) {
      routeTo(this.props.to);
    } else {
      this.props.onClick(e);
    }
  }

  render() {
    const { tagName, to, children, className, disabled, ...props } = this.props;

    if (!props.href && tagName === 'a') {
      props.href = to || '#!';
    }

    if (!props.role) {
      if (to && tagName !== 'a') {
        props.role = 'link';
      } else if (!to) {
        props.role = 'button';
      }
    }

    if (disabled) {
      props.disabled = true;
    }

    props.onClick = this.handleClick;

    props.ref = node => this.link = node;

    const Link = createComponent(
      ({ theme, disabled }) => ({
        color: disabled ? theme.disabledColor : theme.color,
        outline: theme.outline,
        textDecoration: theme.textDecoration,
        transition: theme.transition,
        cursor: disabled ? theme.disabledCursor : theme.cursor,

        '&:hover': {
          color: disabled
            ? theme['&:hover'].disabledColor
            : theme['&:hover'].color
        },

        '&:focus': {
          color: theme['&:focus'].color,
          outline: theme['&:focus'].outline,
          outlineOffset: theme['&:focus'].outlineOffset
        },

        '&:active': {
          color: theme['&:active'].color,
          outline: theme['&:active'].outline
        }
      }),
      tagName,
      ['disabled', 'href', 'role']
    );
    return <Link {...props}>{children}</Link>;
  }
}

Link.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  tagName: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
};

Link.defaultProps = {
  tagName: 'a'
};

export default Link;
