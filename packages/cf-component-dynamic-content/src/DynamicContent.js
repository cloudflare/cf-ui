const React = require('react');
const { PropTypes } = React;

class DynamicContent extends React.Component {
  render() {
    return (
      <div
        className="cf-dynamic-content"
        dangerouslySetInnerHTML={this.props.dangerouslySetInnerHTML}
      />
    );
  }
}

DynamicContent.propTypes = {
  dangerouslySetInnerHTML: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }).isRequired
};

module.exports = DynamicContent;
