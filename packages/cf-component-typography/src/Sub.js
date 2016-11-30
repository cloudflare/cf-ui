const React = require('react');
const {PropTypes} = React;

class Sub extends React.Component {
  render() {
    return (
      <sub className="cf-sub">
        {this.props.children}
      </sub>
    );
  }
}

Sub.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = Sub;
