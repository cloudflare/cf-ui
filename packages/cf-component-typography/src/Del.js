const React = require('react');

class Del extends React.Component {
  render() {
    return (
      <del className="cf-del">
        {this.props.children}
      </del>
    );
  }
}

module.exports = Del;
