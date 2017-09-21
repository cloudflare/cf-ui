import React from 'react';
import PropTypes from 'prop-types';
import includes from 'lodash/includes';

class CheckboxGroup extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, checked) {
    const values = this.props.children
      .filter(option => {
        if (option.props.value === value) {
          return checked;
        }

        return includes(this.props.values, option.props.value);
      })
      .map(option => {
        return option.props.value;
      });

    this.props.onChange(values);
  }

  render() {
    return (
      <div>
        {React.Children.map(this.props.children, Checkbox =>
          React.cloneElement(Checkbox, {
            key: Checkbox.props.name,
            checked: includes(this.props.values, Checkbox.props.value),
            onChange: event =>
              this.handleChange(Checkbox.props.value, event.target.checked)
          })
        )}
      </div>
    );
  }
}

CheckboxGroup.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([false])])
        .isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CheckboxGroup;
