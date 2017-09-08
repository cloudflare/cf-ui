import React from 'react';
import PropTypes from 'prop-types';

const GooglePlus = ({className, label}) => (<svg className={className} aria-label={label} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M15.419,7.011H14.07V5.662H12.721V7.011H11.372V8.359h1.349V9.708H14.07V8.359h1.349ZM5.3,7.011V8.629H7.98A2.55,2.55,0,0,1,5.3,10.666,2.982,2.982,0,0,1,5.3,4.7a2.657,2.657,0,0,1,1.882.728L8.465,4.2A4.526,4.526,0,0,0,5.3,2.964a4.721,4.721,0,0,0,0,9.442A4.355,4.355,0,0,0,9.834,7.793a4.343,4.343,0,0,0-.074-.782Z"/></svg>)


GooglePlus.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};  

export default GooglePlus;
