import React, { PropTypes } from 'react';

class FormLabel extends React.Component {
  render() {
    let className = 'cf-form__label';

    if (this.props.hidden) {
      className += ' cf-form__label--hidden';
    }

    return (
      <label className={className}>
        {this.props.children}
      </label>
    );
  }
}

FormLabel.propTypes = {
  hidden: PropTypes.bool,
  children: PropTypes.node
};

export default FormLabel;
