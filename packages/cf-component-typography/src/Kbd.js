const React = require('react');
const {PropTypes} = React;

class Kbd extends React.Component {
  render() {
    return (
      <kbd className="cf-kbd">
        {this.props.children}
      </kbd>
    );
  }
}

Kbd.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = Kbd;
