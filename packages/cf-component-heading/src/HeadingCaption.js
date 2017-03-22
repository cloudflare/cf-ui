import React, { PropTypes } from 'react';
import { createComponent } from 'cf-style-container';

const styles = ({ theme }) => ({
  color: theme.color,
  fontSize: theme.fontFize,
  fontColor: theme.fontColor,
  fontWeight: theme.fontWeight,
  marginLeft: theme.marginLeft
});

const HeadingCaption = ({ className, children }) => (
  <small className={className}>
    {children}
  </small>
);

HeadingCaption.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default createComponent(styles, HeadingCaption);
