// @flow

const React = require('react');
const {PropTypes} = React;
const requiredIf = require('react-required-if');
const {routeTo} = require('cf-util-route-handler');

class Link extends React.Component {
  link: HTMLLinkElement;

  static propTypes = {
    to: requiredIf(PropTypes.string, props => !props.onClick),
    onClick: requiredIf(PropTypes.func, props => !props.to),
    tagName: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    tagName: 'a'
  };

  focus = () => {
    this.link.focus();
  };

  handleClick = (e: Event) => {
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

    props.ref = node => this.link = node;

    return React.createElement(tagName, props, children);
  }
}

module.exports = Link;
