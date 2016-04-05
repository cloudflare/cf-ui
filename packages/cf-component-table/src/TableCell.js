const React = require('react');
const {PropTypes} = React;

class TableCell extends React.Component {
  static propTypes = {
    sortable: PropTypes.bool,
    editable: PropTypes.bool,
    align: PropTypes.oneOf(['left', 'center', 'right'])
  };

  render() {
    let className = 'cf-table__cell';

    if (this.props.sortable) className += ' cf-table__cell--sortable';
    if (this.props.editable) className += ' cf-table__cell--editable';
    if (this.props.align) className += ' cf-table__cell--align-' + this.props.align;

    return (
      <td className={className}>
        {this.props.children}
      </td>
    );
  }
}

module.exports = TableCell;
