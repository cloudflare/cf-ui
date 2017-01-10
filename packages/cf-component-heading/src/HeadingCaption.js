// @flow

const React = require('react');
const {PropTypes} = React;

class HeadingCaption extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <small className="cf-heading__caption">
        {this.props.children}
      </small>
    );
  }
}

module.exports = HeadingCaption;
