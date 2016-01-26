import React from 'react';

export default class NotificationGlobalContainer extends React.Component {
  render() {
    return (
      <div className="cf-notifications__global_container">
        {this.props.children}
      </div>
    );
  }
}
