const React = require('react');
const {PropTypes} = React;

class TableHead extends React.Component {
  render() {
    return (
      <thead className="cf-table__head">
        {this.props.children}
      </thead>
    );
  }
}

TableHead.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = TableHead;
