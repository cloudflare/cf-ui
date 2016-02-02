const React = require('react');

class Code extends React.Component {
  render() {
    return (
      <code className="cf-code">
        {this.props.children}
      </code>
    );
  }
}

module.exports = Code;
