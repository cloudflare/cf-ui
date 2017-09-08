import React from 'react';
import PropTypes from 'prop-types';

const Pause = ({className, label}) => (<svg className={className} aria-label={label} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect x="9.267" y="3.13" width="3.858" height="9.741"/><rect x="2.893" y="3.13" width="3.858" height="9.741"/></svg>)


Pause.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};  

export default Pause;
