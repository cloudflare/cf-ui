import React from 'react';
import PropTypes from 'prop-types';

const CaretRight = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M6.537,11.483l3.3-3.3a.263.263,0,0,0,0-.371l-3.3-3.3a.262.262,0,0,0-.448.186v6.6A.262.262,0,0,0,6.537,11.483Z" />
  </svg>
);

CaretRight.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default CaretRight;
