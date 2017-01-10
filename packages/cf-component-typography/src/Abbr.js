// @flow

const React = require('react');
const {PropTypes} = React;

class Abbr extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
  };

  render() {
    return (
      <abbr className="cf-abbr" title={this.props.title}>
        {this.props.children}
      </abbr>
    );
  }
}

module.exports = Abbr;
