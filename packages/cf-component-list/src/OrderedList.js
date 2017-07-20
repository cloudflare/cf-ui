import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  listStyleType: theme.listStyleType,
  listStylePosition: theme.listStylePosition,
  marginLeft: theme.marginLeft
});

const OrderedList = ({ children, className }) => (
  <ol className={className}>{children}</ol>
);

OrderedList.propTypes = {
  children: PropTypes.node
};

export default createComponent(styles, OrderedList);
