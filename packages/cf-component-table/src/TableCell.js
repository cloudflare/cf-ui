import React, {PropTypes} from 'react';

export default class TableCell extends React.Component {
  static propTypes = {
    sortable: PropTypes.bool,
    editable: PropTypes.bool
  };

  render() {
    let className = 'cf-table__cell';

    if (this.props.sortable) className += ' cf-table__cell--sortable';
    if (this.props.editable) className += ' cf-table__cell--editable';

    return (
      <td className={className}>
        {this.props.children}
      </td>
    );
  }
}
