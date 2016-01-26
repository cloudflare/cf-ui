import React, {PropTypes} from 'react';

export default class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf([
      'default',
      'primary',
      'success',
      'warning',
      'error'
    ]).isRequired,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    type: 'default'
  };

  render() {
    let className = 'cf-btn cf-btn--' + this.props.type;

    return (
      <button
        className={className}
        disabled={this.props.disabled}
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
