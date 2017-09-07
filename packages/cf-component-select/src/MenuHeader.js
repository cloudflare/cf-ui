import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import { createComponent } from 'cf-style-container';

const MenuHeader = createComponent(
  ({ theme }) => ({
    color: '#454545',
    cursor: 'default',
    fontWeight: 'bold',
    fontSize: '.86667rem',
    backgroundColor: '#f9f9f9',
    borderBottom: `1px solid #eeeeef`,
    width: '100%',
    '> *': {
      display: 'inline-block',
      padding: '8px 10px'
    }
  }),
  'h3'
);

export default MenuHeader;
