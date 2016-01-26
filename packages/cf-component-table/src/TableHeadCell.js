import React, {PropTypes} from 'react';

export default class TableHeadCell extends React.Component {
  static propTypes = {
    sortable: PropTypes.bool,
    editable: PropTypes.bool
  };

  static defaultProps = {
    sortable: false,
    editable: false
  };

  render() {
    let className = 'cf-table__cell cf-table__cell--head';

    if (this.props.sortable) className += ' cf-table__cell--sortable';
    if (this.props.editable) className += ' cf-table__cell--editable';

    return (
      <th className={className}>
        {this.props.children}
      </th>
    );
  }
}
