const React = require('react');
const {PropTypes} = React;

class Button extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    submit: PropTypes.bool,
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
    type: 'default',
    submit: false
  };

  render() {
    let type = this.props.submit ? 'submit' : 'button';
    let className = 'cf-btn cf-btn--' + this.props.type;

    return (
      <button
        type={type}
        className={className}
        disabled={this.props.disabled}
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
};

module.exports = Button;
