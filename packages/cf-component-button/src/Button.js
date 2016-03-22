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
    disabled: PropTypes.bool,
    loading: PropTypes.bool
  };

  static defaultProps = {
    type: 'default',
    submit: false
  };

  render() {
    const {disabled, loading} = this.props;
    const type = this.props.submit ? 'submit' : 'button';
    let className = 'cf-btn cf-btn--' + this.props.type;

    if (loading) {
      className += ' cf-btn--loading';
    }

    // Unless the disabled state is explicitly set, the button is disabled when loading.
    const isDisabled = disabled ? loading : disabled;

    return (
      <button
        type={type}
        className={className}
        disabled={isDisabled}
        onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
};

module.exports = Button;
