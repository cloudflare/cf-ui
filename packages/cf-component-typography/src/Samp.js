// @flow

const React = require('react');
const {PropTypes} = React;

class Samp extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <samp className="cf-samp">
        {this.props.children}
      </samp>
    );
  }
}

module.exports = Samp;
