// @flow

const React = require('react');
const {PropTypes} = React;

class LayoutRow extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className="cf-layout__row">
        {this.props.children}
      </div>
    );
  }
}

module.exports = LayoutRow;
