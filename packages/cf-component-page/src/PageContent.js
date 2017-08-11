import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = () => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '90%',
  maxWidth: '79em'
});

const PageContent = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

PageContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default createComponent(styles, PageContent);
