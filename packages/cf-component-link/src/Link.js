import React, { PropTypes } from 'react';
import { routeTo } from 'cf-util-route-handler';

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

    props.className = 'cf-link';

    if (disabled) {
      props.className += ' cf-link--disabled';
      props.disabled = true;
    }

    if (className) {
      props.className += ' ' + className;
    }

    props.onClick = this.handleClick;

    props.ref = node => this.link = node;

    return React.createElement(tagName, props, children);
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
