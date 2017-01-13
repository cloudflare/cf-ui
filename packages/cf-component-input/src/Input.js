const React = require('react');
const {PropTypes} = React;

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    let className = 'cf-input cf-input--' + this.props.type;

    if (this.props.invalid) {
      className += ' cf-input--invalid';
    }

    return (
      <input className={className} onChange={this.handleChange} {...this.props} />
    );
  }
}

Input.propTypes = {
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

Input.defaultProps = {
  type: 'text'
};

module.exports = Input;
