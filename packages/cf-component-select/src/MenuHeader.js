import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import { createComponent } from 'cf-style-container';

const MenuHeader = createComponent(
  ({ theme }) => ({
    color: theme.color.dusk,
    cursor: 'default',
    fontWeight: 'bold',
    fontSize: '.86667rem',
    backgroundColor: theme.color.moonshine,
    borderBottom: `1px solid ${theme.color.dust}`,
    width: '100%',
    '> *': {
      display: 'inline-block',
      padding: '8px 10px'
    }
  }),
  'h3'
);

export default MenuHeader;
