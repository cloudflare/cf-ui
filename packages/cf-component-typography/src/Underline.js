const React = require('react');

class Underline extends React.Component {
  render() {
    return (
      <u className="cf-underline">
        {this.props.children}
      </u>
    );
  }
}


module.exports = Underline;
