import React from 'react';
import PropTypes from 'prop-types';

const Shield = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M1.98,1.312V8.43h0a5.172,5.172,0,0,0,1.168,3.153,5.921,5.921,0,0,0,1.908,1.54l.01.012L8,14.688l3.008-1.593.016-.013a5.9,5.9,0,0,0,1.825-1.5A5.172,5.172,0,0,0,14.017,8.43h0V1.312Zm10.761,7.03h0a4.086,4.086,0,0,1-.921,2.489,4.668,4.668,0,0,1-1.441,1.183l-.013.01L7.989,13.282V2.724h4.751Z" />
  </svg>
);

Shield.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Shield;
