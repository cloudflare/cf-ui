import React, { PropTypes } from 'react';
import { createComponent } from 'cf-style-container';

const styles = props => {
  const theme = props.theme;
  return {
    '& h1': {
      marginBottom: theme.marginBottom
    },
    '& p': {
      marginTop: theme.marginTop,
      fontSize: theme.fontSize,
      color: theme.defaultColor
    }
  };
};
const PageHeader = ({ title, subtitle, className }) => (
  <header className={className}>
    <h1 className={className}>{title}</h1>
    {subtitle && <p className={className}>{subtitle}</p>}
  </header>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default createComponent(styles, PageHeader);
