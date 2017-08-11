import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = ({ theme, status }) => ({
  display: 'table',
  tableLayout: 'fixed',
  width: '100%',
  borderTop: `1px solid ${theme.colorGrayLight}`,
  borderLeft: status === 'error' ? `3px solid ${theme.colorRed}` : 'initial',

  '&:first-child': {
    borderTop: 'initial'
  }
});

const CardSection = ({ className, children }) => (
  <div className={className}>{children}</div>
);

CardSection.propTypes = {
  className: PropTypes.string,
  status: PropTypes.oneOf(['default', 'error']),
  children: PropTypes.node
};

CardSection.defaultProps = {
  status: 'default'
};

export default createComponent(styles, CardSection, ['status']);
