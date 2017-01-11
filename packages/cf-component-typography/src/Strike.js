// @flow

const React = require('react');
const {PropTypes} = React;

class Strike extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <s className="cf-strike">
        {this.props.children}
      </s>
    );
  }
}

module.exports = Strike;
