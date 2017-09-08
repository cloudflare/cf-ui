import React from 'react';
import PropTypes from 'prop-types';

const Ok = ({className, label}) => (<svg className={className} aria-label={label} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><polygon points="15.736 3.872 13.7 1.836 5.761 9.776 2.3 6.315 0.264 8.35 5.761 13.847 15.736 3.872"/></svg>)


Ok.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};  

export default Ok;
