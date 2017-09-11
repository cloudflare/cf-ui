import React from 'react';
import PropTypes from 'prop-types';

const Plus = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <polygon points="14.68 6.599 9.401 6.599 9.401 1.32 6.599 1.32 6.599 6.599 1.32 6.599 1.32 9.401 6.599 9.401 6.599 14.68 9.401 14.68 9.401 9.401 14.68 9.401 14.68 6.599" />
  </svg>
);

Plus.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Plus;
