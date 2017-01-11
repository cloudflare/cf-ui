// @flow

const React = require('react');
const {PropTypes} = React;

class TableHead extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    className: ''
  };

  render() {
    let className = 'cf-table__head';
    if (this.props.className.trim()) className += ' ' + this.props.className.trim();

    return (
      <thead className={className}>
        {this.props.children}
      </thead>
    );
  }
}

module.exports = TableHead;
