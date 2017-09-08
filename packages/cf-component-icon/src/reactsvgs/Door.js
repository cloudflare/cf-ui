import React from 'react';
import PropTypes from 'prop-types';

const Door = ({className, label}) => (<svg className={className} aria-label={label} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M13.39,1.339H2.58v12.14l8.346,1.951V13.479H13.42V1.339ZM7.675,8.926A1.166,1.166,0,0,1,8.759,7.842,1.084,1.084,0,1,1,7.675,8.926ZM7.106,2.264h5.388V12.533H10.927V3.181Z"/></svg>)


Door.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};  

export default Door;
