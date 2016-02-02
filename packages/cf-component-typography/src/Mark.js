const React = require('react');

class Mark extends React.Component {
  render() {
    return (
      <mark className="cf-mark">
        {this.props.children}
      </mark>
    );
  }
}

module.exports = Mark;
