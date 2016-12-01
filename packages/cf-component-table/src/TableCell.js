const React = require('react');
const {PropTypes} = React;

class TableCell extends React.Component {
  render() {
    let className = 'cf-table__cell';

    if (this.props.align) className += ' cf-table__cell--align-' + this.props.align;

    return (
      <td className={className}>
        {this.props.children}
      </td>
    );
  }
}

TableCell.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node
};

module.exports = TableCell;
