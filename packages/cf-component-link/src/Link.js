import React, {PropTypes} from 'react';
import {routeTo} from 'cf-util-route-handler';

export default class Link extends React.Component {
  static propTypes = {
    to: PropTypes.string,
    onClick: PropTypes.func,
    tagName: PropTypes.string,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    tagName: 'a'
  };

  constructor(props, context) {
    if (!props.to && !props.onClick) {
      throw new Error('<Link/> requires either a `to` or `onClick` prop');
    }

    super(props, context);
  }

  handleClick = e => {
    e.preventDefault();

    if (this.props.disabled) {
      return;
    }

    if (this.props.to) {
      routeTo(this.props.to);
    } else {
      this.props.onClick(e);
    }
  };

  render() {
    const {tagName, to, children, className, disabled, ...props} = this.props;

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

    return React.createElement(tagName, props, children);
  }
}
