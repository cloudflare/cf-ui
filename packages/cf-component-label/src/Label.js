import React, {PropTypes} from 'react';

export default class Label extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'default',
      'info',
      'success',
      'warning',
      'error'
    ]).isRequired,
    tagName: PropTypes.string
  };

  static defaultProps = {
    tagName: 'span'
  };

  render() {
    return React.createElement(this.props.tagName, {
      className: 'cf-label cf-label--' + this.props.type
    }, this.props.children);
  }
}
