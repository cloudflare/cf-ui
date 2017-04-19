import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  position: theme.position,
  marginTop: theme.marginTop,
  padding: theme.padding,
  border: theme.border,
  fontSize: theme.fontSize,
  fontWeight: theme.fontWeight,
  background: theme.background,
  color: theme.color,
  borderRadius: theme.borderRadius,
  boxShadow: theme.boxShadow,
  '-webkit-font-smoothing': 'antialiased',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: '100%',
    borderStyle: 'solid',
    borderColor: 'transparent',
    left: '4px',
    borderWidth: '6px',
    borderBottomColor: theme.colorRed
  },
  '&::after': {
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: '100%',
    borderStyle: 'solid',
    borderColor: 'transparent',
    left: '4px',
    borderWidth: '4px',
    borderBottomColor: theme.colorRed
  },
  '& p': {
    marginTop: 0,
    marginBottom: 0
  },

  '& p + p': {
    marginTop: '0.5em'
  }
});

class FormFieldError extends React.Component {
  render() {
    const { field, validations, className } = this.props;
    if (!field.invalid) {
      return null;
    }

    return (
      <div className={className}>
        {Object.keys(validations).map(validation => {
          return (
            <p key={validation}>
              {validations[validation]}
            </p>
          );
        })}
      </div>
    );
  }
}

FormFieldError.propTypes = {
  field: PropTypes.object.isRequired,
  validations: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default createComponent(styles, FormFieldError);
