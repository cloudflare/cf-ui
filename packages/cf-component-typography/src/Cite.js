// @flow

const React = require('react');
const {PropTypes} = React;

class Cite extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <cite className="cf-cite">
        {this.props.children}
      </cite>
    );
  }
}

module.exports = Cite;
