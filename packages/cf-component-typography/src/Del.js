// @flow

const React = require('react');
const {PropTypes} = React;

class Del extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <del className="cf-del">
        {this.props.children}
      </del>
    );
  }
}

module.exports = Del;
