const React = require('react');
const {PropTypes} = React;

class Mark extends React.Component {
  render() {
    return (
      <mark className="cf-mark">
        {this.props.children}
      </mark>
    );
  }
}

Mark.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = Mark;
