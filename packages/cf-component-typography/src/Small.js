const React = require('react');
const {PropTypes} = React;

class Small extends React.Component {
  render() {
    return (
      <small className="cf-small">
        {this.props.children}
      </small>
    );
  }
}

Small.propTypes = {
  children: PropTypes.node
};

module.exports = Small;
