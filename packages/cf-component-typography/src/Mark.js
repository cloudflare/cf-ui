// @flow

const React = require('react');
const {PropTypes} = React;

class Mark extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <mark className="cf-mark">
        {this.props.children}
      </mark>
    );
  }
}

module.exports = Mark;
