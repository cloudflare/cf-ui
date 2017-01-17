const React = require('react');
const {PropTypes} = React;
const requiredIf = require('react-required-if');

class Textarea extends React.Component {

  render() {
    const {className, ...props} = this.props;
    const classes = ['cf-textarea', className];

    if (this.props.disabled) classes.push('cf-textarea--disabled');
    if (this.props.readOnly) classes.push('cf-textarea--readonly');

    return <textarea className={classes.join(' ')} {...props} />;
  }
  
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: requiredIf(PropTypes.func, props => !props.disabled && !props.readOnly),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

module.exports = Textarea;
