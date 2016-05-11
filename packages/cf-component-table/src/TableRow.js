const React = require('react');
const TablePropTypes = require('./TablePropTypes');

class TableRow extends React.Component {
  static propTypes = {
    type: TablePropTypes.rowType,
    accent: TablePropTypes.rowAccent
  };

  static defaultProps = {
    type: 'default',
    accent: false
  };

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

module.exports = TableRow;
