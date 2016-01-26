import React, {PropTypes} from 'react';

export default class Textarea extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  handleChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <textarea
        className="cf-textarea"
        name={this.props.name}
        value={this.props.value}
        onChange={this.handleChange}/>
    );
  }
}
