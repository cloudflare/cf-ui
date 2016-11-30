const React = require('react');
const {PropTypes} = React;

class Em extends React.Component {
  render() {
    return (
      <em className="cf-em">
        {this.props.children}
      </em>
    );
  }
}

Em.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = Em;
