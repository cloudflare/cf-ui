const React = require('react');

class LayoutContainer extends React.Component {
  render() {
    return (
      <div className="cf-layout__container">
        {this.props.children}
      </div>
    );
  }
}

module.exports = LayoutContainer;
