const React = require('react');

class NotificationGlobalContainer extends React.Component {
  render() {
    return (
      <div className="cf-notifications__global_container">
        {this.props.children}
      </div>
    );
  }
}

module.exports = NotificationGlobalContainer;
