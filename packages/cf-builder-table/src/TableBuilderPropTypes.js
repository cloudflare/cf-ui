const {PropTypes} = require('react');
const {TablePropTypes} = require('cf-component-table');

const row = PropTypes.shape({
  id: PropTypes.string.isRequired,
  cells: PropTypes.object.isRequired,
  type: TablePropTypes.rowType,
  accent: TablePropTypes.rowAccent
});

const rows = PropTypes.arrayOf(row);

const column = PropTypes.shape({
  label: PropTypes.string.isRequired,
  cell: PropTypes.func.isRequired,
  sortable: PropTypes.bool
});

const columns = PropTypes.arrayOf(column);

module.exports = {
  row,
  rows,
  column,
  columns
};
