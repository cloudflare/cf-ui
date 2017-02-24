const React = require('react');
const { PropTypes } = React;

class Abbr extends React.Component {
  render() {
    return (
      <abbr className="cf-abbr" title={this.props.title}>
        {this.props.children}
      </abbr>
    );
  }
}

Abbr.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
};

module.exports = Abbr;
