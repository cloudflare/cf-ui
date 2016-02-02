const React = require('react');

class Var extends React.Component {
  render() {
    return (
      <var className="cf-var">
        {this.props.children}
      </var>
    );
  }
}

module.exports = Var;
