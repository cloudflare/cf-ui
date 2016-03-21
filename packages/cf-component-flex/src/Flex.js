const React = require('react');

class Flex extends React.Component {
  render() {
    return <div className="cf-flex">{this.props.children}</div>;
  }
}

module.exports = Flex;
