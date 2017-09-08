import React from 'react';
import PropTypes from 'prop-types';

const CaretUp = ({className, label}) => (<svg className={className} aria-label={label} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M11.547,9.615l-3.3-3.3a.263.263,0,0,0-.371,0l-3.3,3.3a.263.263,0,0,0,.186.448h6.6A.263.263,0,0,0,11.547,9.615Z"/></svg>)


CaretUp.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};  

export default CaretUp;
