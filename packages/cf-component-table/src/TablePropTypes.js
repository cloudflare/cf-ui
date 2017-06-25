import 'react';
import PropTypes from 'prop-types';

const rowType = PropTypes.oneOf([
  'default',
  'info',
  'success',
  'warning',
  'error'
]);

export default { rowType };
