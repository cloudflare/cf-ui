import React from 'react';
import PropTypes from 'prop-types';

const File = ({className, label}) => (<svg className={className} aria-label={label} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><polygon points="13.612 5.094 10.016 5.094 10.016 1.508 13.612 5.094"/><path d="M13.553,5.876H9.191V1.4h-6.8V14.6H13.612V5.939Zm-8.767-1H7.877V6.111H4.786Zm6.451,7.3H4.786V10.936h6.45Zm0-2.988H4.786V7.949h6.45Z"/></svg>)


File.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};  

export default File;
