const {PropTypes} = require('react');

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

module.exports = {
  rowType,
  rowAccent
};
