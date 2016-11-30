const React = require('react');
const {PropTypes} = React;

class Button extends React.Component {
  render() {
    const {disabled, loading} = this.props;
    const type = this.props.submit ? 'submit' : 'button';
    let className = 'cf-btn cf-btn--' + this.props.type;

    if (loading) {
      className += ' cf-btn--loading';
    }

    // Unless the disabled state is explicitly set, the button is disabled when loading.
    const isDisabled = (disabled !== undefined ? disabled : loading) || false;

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
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  submit: PropTypes.bool,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'success',
    'warning',
    'danger'
  ]).isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node
};

Button.defaultProps = {
  type: 'default',
  submit: false
};

module.exports = Button;
