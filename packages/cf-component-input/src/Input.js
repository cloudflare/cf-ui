import React, { PropTypes } from 'react';

class Input extends React.Component {
  render() {
    let { className, type, invalid, ...props } = this.props;

    let _className = 'cf-input cf-input--' + type;

    if (invalid) {
      _className += ' cf-input--invalid';
    }

    if (className) {
      _className += ' ' + className;
    }

    return <input className={_className} type={type} {...props} />;
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'number', 'password', 'search']),
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  invalid: PropTypes.bool,
  className: PropTypes.string
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
