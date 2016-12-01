const React = require('react');
const {PropTypes} = React;

class Var extends React.Component {
  render() {
    return (
      <var className="cf-var">
        {this.props.children}
      </var>
    );
  }
}

Var.propTypes = {
  children: PropTypes.node
};

module.exports = Var;
