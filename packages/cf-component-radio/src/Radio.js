import React, { PropTypes } from 'react';

class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    let className = 'cf-radio';

    if (this.props.checked) {
      className += ' cf-radio--checked';
    }

    return (
      <label htmlFor={this.props.name} className={className}>
        <input
          type="radio"
          className="cf-radio__input"
          id={this.props.name}
          name={this.props.name}
          value={this.props.value}
          checked={this.props.checked}
          onChange={this.handleChange}
        />
        {this.props.label &&
          <span className="cf-radio__label">
            {this.props.label}
          </span>}
      </label>
    );
  }
}

Radio.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([false])
  ]).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Radio;
