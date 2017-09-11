import React from 'react';
import PropTypes from 'prop-types';

const OkSign = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M8,.748A7.252,7.252,0,1,0,15.252,8,7.252,7.252,0,0,0,8,.748ZM6.643,11.8,3.491,8.652,4.658,7.484,6.643,9.469,11.2,4.915l1.168,1.168Z" />
  </svg>
);

OkSign.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default OkSign;
