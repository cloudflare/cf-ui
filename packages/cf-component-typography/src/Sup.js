const React = require('react');

class Sup extends React.Component {
  render() {
    return (
      <sup className="cf-sup">
        {this.props.children}
      </sup>
    );
  }
}

module.exports = Sup;
