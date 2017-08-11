import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  listStyleType: theme.listStyleType,
  listStylePosition: theme.listStylePosition,
  marginLeft: theme.marginLeft
});

const UnorderedList = ({ children, className }) => (
  <ul className={className}>{children}</ul>
);

UnorderedList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default createComponent(styles, UnorderedList);
