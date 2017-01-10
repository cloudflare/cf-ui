// @flow

const React = require('react');
const {PropTypes} = React;

class Sub extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <sub className="cf-sub">
        {this.props.children}
      </sub>
    );
  }
}

module.exports = Sub;
