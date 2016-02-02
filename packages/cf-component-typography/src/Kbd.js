const React = require('react');

class Kbd extends React.Component {
  render() {
    return (
      <kbd className="cf-kbd">
        {this.props.children}
      </kbd>
    );
  }
}

module.exports = Kbd;
