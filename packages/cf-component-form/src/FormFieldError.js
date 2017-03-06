import React, { PropTypes } from 'react';

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

export default FormFieldError;
