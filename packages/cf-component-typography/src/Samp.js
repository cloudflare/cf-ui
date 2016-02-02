const React = require('react');

class Samp extends React.Component {
  render() {
    return (
      <samp className="cf-samp">
        {this.props.children}
      </samp>
    );
  }
}

module.exports = Samp;
