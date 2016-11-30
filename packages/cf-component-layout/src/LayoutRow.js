const React = require('react');
const {PropTypes} = React;

class LayoutRow extends React.Component {
  render() {
    return (
      <div className="cf-layout__row">
        {this.props.children}
      </div>
    );
  }
}

LayoutRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = LayoutRow;
