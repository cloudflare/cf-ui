const React = require('react');
const {PropTypes} = React;

class TableFoot extends React.Component {
  render() {
    return (
      <tfoot className="cf-table__foot">
        {this.props.children}
      </tfoot>
    );
  }
}

TableFoot.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = TableFoot;
