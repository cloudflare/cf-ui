import React from 'react';
import PropTypes from 'prop-types';

const InfoSign = ({className, label}) => (<svg className={className} aria-label={label} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.149,1.014A6.986,6.986,0,1,0,15.134,8,6.986,6.986,0,0,0,8.149,1.014Zm.817,11.423h-1.7V6.933h1.7Zm0-7.065a.226.226,0,0,1-.226.226H7.487a.226.226,0,0,1-.226-.226V4.121a.226.226,0,0,1,.226-.226H8.739a.226.226,0,0,1,.226.226Z"/></svg>)


InfoSign.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};  

export default InfoSign;
