import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  position: theme.position,
  bottom: theme.bottom,
  left: theme.left,
  right: theme.right,
  maxHeight: theme.maxHeight,
  overflow: theme.overflow,
  zIndex: theme.zIndexMax,
  fontSize: theme.fontSize
});

const NotificationGlobalContainer = ({ className, children }) => {
  return React.createElement(
    'div',
    { className: 'cf-notifications__global_container' },
    children
  );
};

NotificationGlobalContainer.propTypes = {
  children: PropTypes.node
};

export default createComponent(styles, NotificationGlobalContainer);
