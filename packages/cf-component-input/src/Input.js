const React = require('react');
const {PropTypes} = React;

class Input extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'text',
      'email',
      'number',
      'password',
      'search'
    ]),
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    autoComplete: PropTypes.string,
    invalid: PropTypes.bool
  };

  static defaultProps = {
    type: 'text'
  };

  handleChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    let className = 'cf-input cf-input--' + this.props.type;

    if (this.props.invalid) {
      className += ' cf-input--invalid';
    }

    return (
      <input
        type={this.props.type}
        className={className}
        name={this.props.name}
        value={this.props.value}
        onChange={this.handleChange}
        placeholder={this.props.placeholder}
        autoComplete={this.props.autoComplete}/>
    );
  }
}

module.exports = Input;
