import React, { PropTypes } from 'react';

class FormFooter extends React.Component {
  render() {
    return (
      <div className="cf-form__footer">
        {this.props.children}
      </div>
    );
  }
}

FormFooter.propTypes = {
  children: PropTypes.node
};

export default FormFooter;
