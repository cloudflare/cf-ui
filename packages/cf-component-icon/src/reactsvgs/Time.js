import React from 'react';
import PropTypes from 'prop-types';

const Time = ({className, label}) => (<svg className={className} aria-label={label} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14.947,8A6.947,6.947,0,1,0,8,14.947,6.947,6.947,0,0,0,14.947,8ZM8,13.643a5.643,5.643,0,1,1,3.99-1.653A5.623,5.623,0,0,1,8,13.643Z"/><path d="M8.071,8.314l3.52,2.033a4.073,4.073,0,0,0,.637-1.138L9.049,7.373V3.781a3.766,3.766,0,0,0-1.3,0V8.125Z"/></svg>)


Time.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};  

export default Time;
