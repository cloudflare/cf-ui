const React = require('react');
const {PropTypes} = React;

class FormFieldset extends React.Component {
  render() {
    return (
      <fieldset className="cf-form__fieldset">
        <legend className="cf-form__fieldset_legend">
          {this.props.legend}
        </legend>
        <div className="cf-form__fieldset_content">
          {this.props.children}
        </div>
      </fieldset>
    );
  }
}

FormFieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = FormFieldset;
