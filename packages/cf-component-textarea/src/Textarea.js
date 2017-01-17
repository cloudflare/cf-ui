const React = require('react');
const {PropTypes} = React;
const requiredIf = require('react-required-if');

class Textarea extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  }

  render() {
    let {className, ...props} = this.props;
    
    className = 'cf-textarea';

    if (this.props.disabled) className += ' cf-textarea--disabled';
    if (this.props.readOnly) className += ' cf-textarea--readonly';

    return <textarea className={className} {...props} />;
  }
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  onChange: requiredIf(PropTypes.func, props => !props.disabled && !props.readOnly),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

module.exports = Textarea;
