import React, { PropTypes } from 'react';
import Checkbox from './Checkbox';
import includes from 'lodash/includes';

class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, checked) {
    const values = this.props.options
      .filter(option => {
        if (option.value === value) {
          return checked;
        }

        return includes(this.props.values, option.value);
      })
      .map(option => {
        return option.value;
      });

    this.props.onChange(values);
  }

  render() {
    return (
      <div className="cf-checkbox__group">
        {this.props.options.map(option => {
          return (
            <Checkbox
              key={option.name}
              label={option.label}
              name={option.name}
              value={option.value}
              checked={includes(this.props.values, option.value)}
              onChange={e => this.handleChange(option.value, e.target.checked)}
            />
          );
        })}
      </div>
    );
  }
}

CheckboxGroup.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([false])
      ]).isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CheckboxGroup;
