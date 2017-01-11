// @flow

const React = require('react');
const {PropTypes} = React;

class Em extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <em className="cf-em">
        {this.props.children}
      </em>
    );
  }
}

module.exports = Em;
