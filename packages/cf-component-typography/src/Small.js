// @flow

const React = require('react');
const {PropTypes} = React;

class Small extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <small className="cf-small">
        {this.props.children}
      </small>
    );
  }
}

module.exports = Small;
