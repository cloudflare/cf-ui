const React = require('react');

class Em extends React.Component {
  render() {
    return (
      <em className="cf-em">
        {this.props.children}
      </em>
    );
  }
}

module.exports = Em;
