const React = require('react');
const {PropTypes} = React;

class TableBody extends React.Component {
  render() {
    return (
      <tbody className="cf-table__body">
        {this.props.children}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  children: PropTypes.node
};

module.exports = TableBody;
