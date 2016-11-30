const React = require('react');
const {PropTypes} = React;

class Samp extends React.Component {
  render() {
    return (
      <samp className="cf-samp">
        {this.props.children}
      </samp>
    );
  }
}

Samp.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = Samp;
