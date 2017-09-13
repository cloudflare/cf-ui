import React from 'react';
import PropTypes from 'prop-types';

const CreditCard = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path d="M14.029,2.542H1.971A1.429,1.429,0,0,0,.544,3.969V12.03a1.43,1.43,0,0,0,1.427,1.428H14.029a1.429,1.429,0,0,0,1.427-1.428V3.969A1.429,1.429,0,0,0,14.029,2.542Zm.427,9.487a.433.433,0,0,1-.427.428H1.971a.433.433,0,0,1-.427-.428V8.107H14.456Zm0-6.59H1.544V3.969a.433.433,0,0,1,.427-.427H14.029a.433.433,0,0,1,.427.427Z" />
  </svg>
);

CreditCard.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default CreditCard;
