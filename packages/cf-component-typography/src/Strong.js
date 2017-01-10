// @flow

const React = require('react');
const {PropTypes} = React;

class Strong extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <strong className="cf-strong">
        {this.props.children}
      </strong>
    );
  }
}

module.exports = Strong;
