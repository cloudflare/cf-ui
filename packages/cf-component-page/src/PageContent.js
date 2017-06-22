import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = () => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  mobile: {
    width: '13.6em'
  },
  mobileWide: {
    width: '30.4em'
  },
  tablet: {
    width: '47.2em'
  },
  desktop: {
    width: '64em'
  },
  desktopLarge: {
    width: '97.6em'
  }
});

const PageContent = ({ className, children }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

PageContent.propTypes = {
  children: PropTypes.node
};

export default createComponent(styles, PageContent);
