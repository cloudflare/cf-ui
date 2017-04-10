import 'react';
import PropTypes from 'prop-types';

const rowType = PropTypes.oneOf([
  'default',
  'info',
  'success',
  'warning',
  'error'
]);

const rowAccent = PropTypes.oneOf([
  false,
  'gray',
  'orange',
  'pink',
  'red',
  'green',
  'purple'
]);

export default { rowType, rowAccent };
