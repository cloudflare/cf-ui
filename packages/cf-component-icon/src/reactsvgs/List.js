import React from 'react';
import PropTypes from 'prop-types';

const List = ({ className, label }) => (
  <svg
    className={className}
    aria-label={label}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <rect x="1.589" y="2.539" width="1.98" height="1.98" />
    <rect x="5.425" y="2.539" width="8.986" height="1.98" />
    <rect x="1.589" y="6.979" width="1.98" height="1.98" />
    <rect x="5.425" y="6.979" width="8.986" height="1.98" />
    <rect x="1.589" y="11.481" width="1.98" height="1.98" />
    <rect x="5.425" y="11.481" width="4.992" height="1.98" />
  </svg>
);

List.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default List;
