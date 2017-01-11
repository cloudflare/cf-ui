// @flow

const React = require('react');
const {PropTypes} = React;

class TableHeadCell extends React.Component {
  static propTypes = {
    className: PropTypes.string,
   children: PropTypes.node
  };

  static defaultProps = {
    className: ''
  };

  render() {
    let className = 'cf-table__cell cf-table__cell--head';
    if (this.props.className.trim()) className += ' ' + this.props.className.trim();

    return (
      <th className={className}>
        {this.props.children}
      </th>
    );
  }
}

module.exports = TableHeadCell;
