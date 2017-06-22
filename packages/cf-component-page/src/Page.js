import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

// Doesn't allow overrides atm
const styles = () => ({
  paddingTop: '2.5rem',
  paddingBottom: '2.5rem',
  tablet: {
    paddingBottom: '1.3rem'
  }
});

const Page = ({ className, children }) => {
  return (
    <article className={className}>
      {children}
    </article>
  );
};

Page.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default createComponent(styles, Page);
