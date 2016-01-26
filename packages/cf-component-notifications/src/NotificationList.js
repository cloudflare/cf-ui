import React from 'react';

export default class NotificationList extends React.Component {
  render() {
    return (
      <div className="cf-notifications">
        {this.props.children}
      </div>
    );
  }
}
