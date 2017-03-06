import React, { PropTypes } from 'react';

class FormHeader extends React.Component {
  render() {
    return (
      <div className="cf-form__header">
        <h3 className="cf-form__title">
          {this.props.title}
        </h3>
      </div>
    );
  }
}

FormHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default FormHeader;
