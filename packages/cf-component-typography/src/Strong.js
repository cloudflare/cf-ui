const React = require('react');

class Strong extends React.Component {
  render() {
    return (
      <strong className="cf-strong">
        {this.props.children}
      </strong>
    );
  }
}

module.exports = Strong;
