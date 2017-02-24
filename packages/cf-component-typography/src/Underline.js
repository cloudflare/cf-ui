const React = require('react');
const { PropTypes } = React;

class Underline extends React.Component {
  render() {
    return (
      <u className="cf-underline">
        {this.props.children}
      </u>
    );
  }
}

Underline.propTypes = {
  children: PropTypes.node
};

module.exports = Underline;
