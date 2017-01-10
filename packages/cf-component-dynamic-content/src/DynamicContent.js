// @flow

const React = require('react');
const {PropTypes} = React;

class DynamicContent extends React.Component {
  static propTypes = {
    dangerouslySetInnerHTML: PropTypes.shape({
      __html: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    return (
      <div
        className="cf-dynamic-content"
        dangerouslySetInnerHTML={this.props.dangerouslySetInnerHTML}/>
    );
  }
}

module.exports = DynamicContent;
