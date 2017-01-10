const React = require('react');
const {PropTypes} = React;

class Var extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <var className="cf-var">
        {this.props.children}
      </var>
    );
  }
}

module.exports = Var;
