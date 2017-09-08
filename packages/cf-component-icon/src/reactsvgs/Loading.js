import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({className, label}) => (<svg className={className} aria-label={label} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle id="loading-inner" cx="50%" cy="50%" r="45%"/></svg>)


Loading.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};  

export default Loading;
