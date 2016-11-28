const React = require('react');
const {PropTypes} = React;

class Sup extends React.Component {
  render() {
    return (
      <sup className="cf-sup">
        {this.props.children}
      </sup>
    );
  }
}

Sup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = Sup;
