import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import { createComponent } from 'cf-style-container';

const ValueComponent = ({ className, ...props }) => {
  const key = props.id + '-key';
  return (
    <div className={className} key={key}>
      <ReactSelect.defaultProps.valueComponent {...props} />
    </div>
  );
};

ValueComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
  value: PropTypes.object.isRequired
};

const Value = createComponent(({ theme, onRemove, disabled }) => {
  // onRemove implies it's a multi-select value
  if (onRemove)
    return {
      backgroundColor: theme.color.moonshine,
      border: `1px solid #a0a1a4`,
      color: theme.color.dusk,
      display: 'inline-block',
      fontSize: '.86667rem',
      lineHeight: 1.4,
      marginLeft: '4px',
      marginTop: '4px',
      verticalAlign: 'top',
      '& .Select-value-icon': {
        cursor: disabled ? 'not-allowed' : 'pointer',
        padding: '1px 5px 3px 5px',
        display: 'inline-block',
        verticalAlign: 'middle',
        float: 'right'
      },
      '& .Select-value-icon:hover': {
        color: theme.color.dusk
      },
      '& .Select-value-icon:focus': {
        backgroundColor: theme.color.smoke,
        color: theme.color.dusk
      },
      '& .Select-value-icon:active': {
        backgroundColor: theme.color.smoke
      },
      '& .Select-value-label': {
        cursor: 'default',
        padding: '2px 1px 2px 8px',
        position: 'relative',
        top: '2px'
      },
      '& .Select--multi a.Select-value-label': {
        color: theme.color.rain,
        cursor: 'pointer',
        textDecoration: 'none'
      },
      '& .Select--multi a.Select-value-label:hover': {
        textDecoration: 'underline'
      }
    };

  return {
    bottom: 0,
    color: ' #333',
    left: 0,
    lineHeight: '32px',
    paddingLeft: '10px',
    paddingRight: '10px',
    position: 'absolute',
    right: 0,
    top: 0,
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };
}, ValueComponent);

export default Value;
