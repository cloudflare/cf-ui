import React, { PropTypes } from 'react';
import { createComponent } from 'cf-style-container';

const styles = props => {
  return {};
};

const Page = ({ className, children }) => (
  <article className={className}>
    {children}
  </article>
);

Page.propTypes = {
  children: PropTypes.node
};

export default createComponent(styles, Page);
