import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

const Header = createComponent(
  ({ theme, sticky }) => ({
    backgroundImage: theme.gradient.dawnSunrise,
    backgroundSize: '100% 3px',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.color.moonshine,
    borderBottom: `1px solid ${theme.color.smoke}`,
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.color.charcoal,
    height: 63,
    paddingTop: 3,
    top: 0,
    left: 0,
    position: sticky ? 'fixed' : 'static',
    width: '100%',
    borderBottom: `1px solid ${theme.color.dust}`,
    zIndex: 1200
  }),
  'header'
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
  sticky: PropTypes.bool
};

export default Header;
