// @flow

const React = require('react');
const {PropTypes} = React;

class NotificationList extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className="cf-notifications">
        {this.props.children}
      </div>
    );
  }
}

module.exports = NotificationList;
