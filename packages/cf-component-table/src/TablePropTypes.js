import { PropTypes } from 'react';

export const rowType = PropTypes.oneOf([
  'default',
  'info',
  'success',
  'warning',
  'error'
]);

export const rowAccent = PropTypes.oneOf([
  false,
  'gray',
  'orange',
  'pink',
  'red',
  'green',
  'purple'
]);
