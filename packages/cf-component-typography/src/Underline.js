// @flow

const React = require('react');
const {PropTypes} = React;

class Underline extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <u className="cf-underline">
        {this.props.children}
      </u>
    );
  }
}

module.exports = Underline;
