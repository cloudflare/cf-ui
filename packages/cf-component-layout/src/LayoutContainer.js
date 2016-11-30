const React = require('react');
const {PropTypes} = React;

class LayoutContainer extends React.Component {
  render() {
    return (
      <div className="cf-layout__container">
        {this.props.children}
      </div>
    );
  }
}

LayoutContainer.propTypes = {
  children: PropTypes.node
};

module.exports = LayoutContainer;
