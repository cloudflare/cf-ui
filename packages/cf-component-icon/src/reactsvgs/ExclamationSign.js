import React from 'react';
import PropTypes from 'prop-types';

const ExclamationSign = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M15.672,14.2,8.3,1.443a.352.352,0,0,0-.609,0L.328,14.2a.352.352,0,0,0,.3.527H15.368A.352.352,0,0,0,15.672,14.2ZM8.743,12.9a.221.221,0,0,1-.221.221H7.478a.221.221,0,0,1-.221-.221V11.86a.221.221,0,0,1,.221-.221H8.522a.221.221,0,0,1,.221.221Zm-.025-2.422H7.282L7.257,6.005H8.743Z" />
  </svg>
);

ExclamationSign.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default ExclamationSign;
