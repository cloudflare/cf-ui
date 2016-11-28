const React = require('react');
const {PropTypes} = React;

class Strong extends React.Component {
  render() {
    return (
      <strong className="cf-strong">
        {this.props.children}
      </strong>
    );
  }
}

Strong.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = Strong;
