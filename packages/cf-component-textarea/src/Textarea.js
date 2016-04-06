const React = require('react');
const {PropTypes} = React;
const requiredIf = require('react-required-if');

class Textarea extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    onChange: requiredIf(PropTypes.func, props => !props.disabled && !props.readOnly),
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  };

  handleChange = e => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  };

  render() {
    let className = 'cf-textarea';

    if (this.props.disabled) className += ' cf-textarea--disabled';
    if (this.props.readOnly) className += ' cf-textarea--readonly';

    return (
      <textarea
        className={className}
        name={this.props.name}
        value={this.props.value}
        disabled={this.props.disabled}
        readOnly={this.props.readOnly}
        onChange={this.handleChange}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}/>
    );
  }
}

module.exports = Textarea;
