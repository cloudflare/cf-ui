// @flow

const React = require('react');
const {PropTypes} = React;

class LayoutContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className="cf-layout__container">
        {this.props.children}
      </div>
    );
  }
}

module.exports = LayoutContainer;
