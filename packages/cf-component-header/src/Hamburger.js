import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'cf-component-icon';
import { createComponent } from 'cf-style-container';

const Wrapper = createComponent(({ theme }) => ({
  fontSize: '1.3rem',
  borderRight: `1px solid ${theme.color.smoke}`,
  padding: '0.9em 1em 1em 1em',
  userSelect: 'none',
  cursor: 'pointer',
  tablet: {
    display: 'none'
  }
}));

const Hamburger = () => (
  <Wrapper><Icon label="Open the menu" type="hamburger" /></Wrapper>
);

Hamburger.propTypes = {
  label: PropTypes.string
};

Hamburger.defaultProps = {
  label: 'Open the menu'
};

export default Hamburger;
