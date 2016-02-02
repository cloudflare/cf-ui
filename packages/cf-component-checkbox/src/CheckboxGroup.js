const React = require('react');
const {PropTypes} = React;
const Checkbox = require('./Checkbox');
const includes = require('lodash/includes');

class CheckboxGroup extends React.Component {
  static propTypes = {
    values: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([false])
      ]).isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })).isRequired
  };

  handleChange = (value, checked) => {
    const values = this.props.options.filter(option => {
      if (option.value === value) {
        return checked;
      }

      return includes(this.props.values, option.value);
    }).map(option => {
      return option.value;
    });

    this.props.onChange(values);
  };

  render() {
    return (
      <div className="cf-checkbox__group">
        {this.props.options.map(option => {
          return <Checkbox
            key={option.name}
            label={option.label}
            name={option.name}
            value={option.value}
            checked={includes(this.props.values, option.value)}
            onChange={val => this.handleChange(option.value, val)}/>;
        })}
      </div>
    );
  }
}

module.exports = CheckboxGroup;
