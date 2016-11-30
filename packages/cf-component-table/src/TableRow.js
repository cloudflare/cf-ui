const React = require('react');
const {PropTypes} = React;
const TablePropTypes = require('./TablePropTypes');

class TableRow extends React.Component {
  render() {
    let className = `cf-table__row cf-table__row--${this.props.type}`;

    if (this.props.accent) {
      className += ` cf-table__row--accent-${this.props.accent}`;
    }

    return (
      <tr className={className}>
        {this.props.children}
      </tr>
    );
  }
}

TableRow.propTypes = {
  type: TablePropTypes.rowType,
  accent: TablePropTypes.rowAccent,
  children: PropTypes.arrayOf(PropTypes.node)
};

TableRow.defaultProps = {
  type: 'default',
  accent: false
};

module.exports = TableRow;
