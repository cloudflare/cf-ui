import React from 'react';
import PropTypes from 'prop-types';

const Speech = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M13.608,2.642H2.392a.99.99,0,0,0-.99.99V15.36l2.478-2.569h9.726a.99.99,0,0,0,.99-.99V3.632A.99.99,0,0,0,13.608,2.642ZM12,9.883H4V8.757h8Zm0-3.208H4V5.549h8Z" />
  </svg>
);

Speech.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Speech;
