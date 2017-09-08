import React from 'react';
import PropTypes from 'prop-types';

const Download = ({className, label}) => (<svg className={className} aria-label={label} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4.24,2.48h7.52V4.4H4.24Zm7.52,5.84V5.36H4.24V8.32H0l8,5.2,8-5.2"/></svg>)


Download.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};  

export default Download;
