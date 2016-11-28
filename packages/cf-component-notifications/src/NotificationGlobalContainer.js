const React = require('react');
const {PropTypes} = React;

class NotificationGlobalContainer extends React.Component {
  render() {
    return (
      <div className="cf-notifications__global_container">
        {this.props.children}
      </div>
    );
  }
}

NotificationGlobalContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = NotificationGlobalContainer;
