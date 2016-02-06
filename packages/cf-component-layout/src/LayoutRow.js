const React = require('react');

class LayoutRow extends React.Component {
  render() {
    return (
      <div className="cf-layout__row">
        {this.props.children}
      </div>
    );
  }
}

module.exports = LayoutRow;
