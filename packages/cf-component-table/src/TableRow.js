// @flow

const React = require('react');
const {PropTypes} = React;
const TablePropTypes = require('./TablePropTypes');

class TableRow extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    type: TablePropTypes.rowType,
    accent: TablePropTypes.rowAccent,
    children: PropTypes.node
  };

  static defaultProps = {
    className: '',
    type: 'default',
    accent: false
  };

  render() {
    let className = `cf-table__row cf-table__row--${this.props.type}`;

    if (this.props.accent) {
      className += ` cf-table__row--accent-${this.props.accent}`;
    }

    if (this.props.className.trim()) {
      className += ' ' + this.props.className;
    }

    return (
      <tr className={className}>
        {this.props.children}
      </tr>
    );
  }
}

module.exports = TableRow;
