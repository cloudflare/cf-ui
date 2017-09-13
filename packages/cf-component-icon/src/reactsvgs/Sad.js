import React from 'react';
import PropTypes from 'prop-types';

const Sad = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <circle cx="5.397" cy="6.67" r="0.948" />
    <circle cx="10.591" cy="6.67" r="0.948" />
    <path d="M14.756,5.7a7.143,7.143,0,1,0-.347,5.427A7.065,7.065,0,0,0,14.756,5.7ZM13.72,10.8A6.352,6.352,0,1,1,14.372,8,6.389,6.389,0,0,1,13.72,10.8Z" />
    <path d="M8,8.718a5.094,5.094,0,0,0-4.128,2.109,5.02,5.02,0,0,0,.593.715,4.244,4.244,0,0,1,.558-.7,4.209,4.209,0,0,1,5.953,0,4.245,4.245,0,0,1,.558.7,5.036,5.036,0,0,0,.593-.715A5.094,5.094,0,0,0,8,8.718Z" />
  </svg>
);

Sad.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Sad;
