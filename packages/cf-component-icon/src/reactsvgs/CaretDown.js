import React from 'react';
import PropTypes from 'prop-types';

const CaretDown = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M4.517,6.537l3.3,3.3a.263.263,0,0,0,.371,0l3.3-3.3a.262.262,0,0,0-.186-.448H4.7A.263.263,0,0,0,4.517,6.537Z" />
  </svg>
);

CaretDown.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default CaretDown;
