import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const getColors = (theme, type) => {
  switch (type) {
    case 'success':
      return {
        borderColor: theme.color.grass50,
        backgroundColor: theme.color.grass10
      };
    case 'error':
      return {
        borderColor: theme.color.apple50,
        backgroundColor: theme.color.apple10
      };
    case 'info':
      return {
        borderColor: theme.color.marine50,
        backgroundColor: theme.color.marine10
      };
  }
};

const ToastComponent = createComponent(({ theme, type, last }) => ({
  padding: theme.padding,
  marginBottom: last ? 0 : theme.marginBottom,
  borderWidth: theme.borderWidth,
  borderStyle: theme.borderStyle,
  ...getColors(theme, type)
}));

const Toast = props => <div><ToastComponent {...props} /></div>;

Toast.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'info']).isRequired,
  last: PropTypes.bool
};

export default Toast;
