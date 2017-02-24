const React = require('react');
const { PropTypes } = React;

class FormFieldError extends React.Component {
  render() {
    if (!this.props.field.invalid) {
      return null;
    }

    return (
      <div className="cf-form__field-error">
        {Object.keys(this.props.validations).map(validation => {
          return (
            <p key={validation}>
              {this.props.validations[validation]}
            </p>
          );
        })}
      </div>
    );
  }
}

FormFieldError.propTypes = {
  field: PropTypes.object.isRequired,
  validations: PropTypes.object.isRequired
};

module.exports = FormFieldError;
