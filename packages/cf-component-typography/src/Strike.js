const React = require('react');
const {PropTypes} = React;

class Strike extends React.Component {
  render() {
    return (
      <s className="cf-strike">
        {this.props.children}
      </s>
    );
  }
}

Strike.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = Strike;
