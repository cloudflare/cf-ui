// @flow

const React = require('react');
const {PropTypes} = React;

class NotificationGlobalContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className="cf-notifications__global_container">
        {this.props.children}
      </div>
    );
  }
}

module.exports = NotificationGlobalContainer;
