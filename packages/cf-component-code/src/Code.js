const React = require('react');
const { PropTypes } = React;

class Code extends React.Component {
  render() {
    return (
      <code className="cf-code">
        {this.props.children}
      </code>
    );
  }
}

Code.propTypes = {
  children: PropTypes.node
};

module.exports = Code;
