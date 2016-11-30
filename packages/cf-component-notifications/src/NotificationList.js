const React = require('react');
const {PropTypes} = React;

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
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = NotificationList;
