import React from 'react';
import PropTypes from 'prop-types';

const Gear = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M15.12,6.381h-1.7a5.687,5.687,0,0,0-1.308-2.265l.851-1.474a7.293,7.293,0,0,0-2.8-1.618L9.306,2.5a5.65,5.65,0,0,0-2.617,0L5.838,1.025a7.293,7.293,0,0,0-2.8,1.62l.85,1.473A5.64,5.64,0,0,0,2.584,6.381H.88a7.352,7.352,0,0,0,0,3.234h1.7A5.689,5.689,0,0,0,3.89,11.88l-.852,1.475a7.293,7.293,0,0,0,2.8,1.62L6.692,13.5a5.65,5.65,0,0,0,2.613,0l.853,1.478a7.293,7.293,0,0,0,2.8-1.619l-.852-1.476a5.64,5.64,0,0,0,1.308-2.266h1.707a7.352,7.352,0,0,0,0-3.234ZM8,11.188A3.188,3.188,0,1,1,11.188,8,3.188,3.188,0,0,1,8,11.188Z" />
  </svg>
);

Gear.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Gear;
