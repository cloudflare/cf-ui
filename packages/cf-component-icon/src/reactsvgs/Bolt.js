import React from 'react';
import PropTypes from 'prop-types';

const Bolt = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <polygon points="14.345 6.413 10.379 6.413 11.966 0.068 1.655 9.587 5.621 9.587 4.034 15.932 14.345 6.413" />
  </svg>
);

Bolt.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Bolt;
