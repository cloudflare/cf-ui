import React from 'react';
import PropTypes from 'prop-types';

const Mail = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M14.966,3.044a.859.859,0,0,0-.6-.241H1.634a.859.859,0,0,0-.572.217l6.975,6Z" />
    <path d="M8.038,10.3.791,4.067v8.392a.826.826,0,0,0,.843.807H14.366a.826.826,0,0,0,.843-.807V4.115Z" />
  </svg>
);

Mail.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default Mail;
