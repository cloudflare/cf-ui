const React = require('react');
const {PropTypes} = React;

class FormFieldError extends React.Component {
  static propTypes = {
    field: PropTypes.object.isRequired,
    validations: PropTypes.object.isRequired
  };

  render() {
    if (!this.props.field.invalid) {
      // Turn this into "null" after upgraded to React 15+
      return <noscript/>;
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

module.exports = FormFieldError;
