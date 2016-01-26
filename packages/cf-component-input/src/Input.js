import React, {PropTypes} from 'react';

export default class Input extends React.Component {
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
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    type: 'text'
  };

  handleChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <input
        type={this.props.type}
        className={`cf-input cf-input--${this.props.type}`}
        name={this.props.name}
        value={this.props.value}
        onChange={this.handleChange}/>
    );
  }
}
