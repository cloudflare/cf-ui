import React from 'react';

import PropTypes from 'prop-types';

class NotificationList extends React.Component {
  render() {
    return (
      <div className="cf-notifications">
        {this.props.children}
      </div>
    );
  }
}

NotificationList.propTypes = {
  children: PropTypes.node
};

export default NotificationList;
