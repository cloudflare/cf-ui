import React from 'react';
import PropTypes from 'prop-types';

const CaretLeft = ({className, label}) => (<svg className={className} aria-label={label} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M9.463,4.517l-3.3,3.3a.263.263,0,0,0,0,.371l3.3,3.3a.263.263,0,0,0,.448-.186V4.7A.262.262,0,0,0,9.463,4.517Z"/></svg>)


CaretLeft.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};  

export default CaretLeft;
