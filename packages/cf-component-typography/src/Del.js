const React = require('react');
const { PropTypes } = React;

class Del extends React.Component {
  render() {
    return (
      <del className="cf-del">
        {this.props.children}
      </del>
    );
  }
}

Del.propTypes = {
  children: PropTypes.node
};

module.exports = Del;
