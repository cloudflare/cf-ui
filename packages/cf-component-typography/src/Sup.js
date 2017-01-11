// @flow

const React = require('react');
const {PropTypes} = React;

class Sup extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <sup className="cf-sup">
        {this.props.children}
      </sup>
    );
  }
}

module.exports = Sup;
