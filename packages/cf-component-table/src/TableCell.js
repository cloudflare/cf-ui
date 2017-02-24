const React = require('react');
const { PropTypes } = React;

class TableCell extends React.Component {
  render() {
    let className = 'cf-table__cell';
    if (this.props.align)
      className += ' cf-table__cell--align-' + this.props.align;
    if (this.props.className.trim())
      className += ' ' + this.props.className.trim();

    return (
      <td className={className}>
        {this.props.children}
      </td>
    );
  }
}

TableCell.propTypes = {
  className: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node
};

TableCell.defaultProps = {
  className: ''
};

module.exports = TableCell;
