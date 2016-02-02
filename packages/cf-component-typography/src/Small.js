const React = require('react');

class Small extends React.Component {
  render() {
    return (
      <small className="cf-small">
        {this.props.children}
      </small>
    );
  }
}

module.exports = Small;
