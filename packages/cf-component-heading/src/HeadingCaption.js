const React = require('react');
const {PropTypes} = React;

class HeadingCaption extends React.Component {
  render() {
    return (
      <small className="cf-heading__caption">
        {this.props.children}
      </small>
    );
  }
}

HeadingCaption.propTypes = {
  children: PropTypes.node
};

module.exports = HeadingCaption;
