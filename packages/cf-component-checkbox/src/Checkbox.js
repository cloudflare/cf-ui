import React, {PropTypes} from 'react';

export default class Checkbox extends React.Component {
  static propTypes = {
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.oneOf([false])
    ]).isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
  };

  handleChange = e => {
    this.props.onChange(e.target.checked);
  };

  render() {
    let className = 'cf-checkbox';

    if (this.props.checked) {
      className += ' cf-checkbox--checked';
    }

    return (
      <label htmlFor={this.props.name} className={className}>
        <input type="checkbox"
          className="cf-checkbox__input"
          id={this.props.name}
          name={this.props.name}
          value={this.props.value}
          checked={this.props.checked}
          onChange={this.handleChange}/>
        {this.props.label && (
          <span className="cf-checkbox__label">
            {this.props.label}
          </span>
        )}
      </label>
    );
  }
}
