import React, { PropTypes } from 'react';
import Radio from './Radio';

class RadioGroup extends React.Component {
  render() {
    return (
      <div className="cf-radio__group">
        {this.props.options.map(option => {
          return (
            <Radio
              key={option.name}
              label={option.label}
              name={option.name}
              value={option.value}
              checked={this.props.value === option.value}
              onChange={this.props.onChange}
            />
          );
        })}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  value: PropTypes.string.isRequired,
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

export default RadioGroup;
