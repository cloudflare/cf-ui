// @flow

const React = require('react');
const {PropTypes} = React;

class Ins extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <ins className="cf-ins">
        {this.props.children}
      </ins>
    );
  }
}

module.exports = Ins;
