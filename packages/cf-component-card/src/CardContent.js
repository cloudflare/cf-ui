import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const styles = () => ({
  padding: '1.5rem',

  tablet: {
    display: 'table-cell'
  }
});

const Title = createComponent(
  () => ({
    fontWeight: 400,
    marginBottom: '1rem'
  }),
  'h3'
);

const Footer = createComponent(({ theme }) => ({
  fontSize: '0.8rem',
  color: theme.colorGray,
  lineHeight: '1.3',
  marginTop: '1.5em'
}));

const CardContent = ({ className, title, children, footerMessage }) => (
  <div className={className}>
    <Title>{title}</Title>
    {children}
    {footerMessage && <Footer>{footerMessage}</Footer>}
  </div>
);

CardContent.propTypes = {
  title: PropTypes.node,
  footerMessage: PropTypes.string,
  children: PropTypes.node
};

export default createComponent(styles, CardContent);
