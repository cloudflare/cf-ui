const React = require('react');
const { PropTypes } = React;

class Ins extends React.Component {
  render() {
    return (
      <ins className="cf-ins">
        {this.props.children}
      </ins>
    );
  }
}

Ins.propTypes = {
  children: PropTypes.node
};

module.exports = Ins;
