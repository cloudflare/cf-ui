// @flow

const React = require('react');
const {PropTypes} = React;

class Kbd extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <kbd className="cf-kbd">
        {this.props.children}
      </kbd>
    );
  }
}

module.exports = Kbd;
