const React = require('react');
const {PropTypes} = React;

class Cite extends React.Component {
  render() {
    return (
      <cite className="cf-cite">
        {this.props.children}
      </cite>
    );
  }
}

Cite.propTypes = {
  children: PropTypes.node
};

module.exports = Cite;
