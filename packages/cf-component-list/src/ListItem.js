import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = () => ({});

const ListItem = ({ children, className }) => (
  <li className={className}>{children}</li>
);

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default createComponent(styles, ListItem);
