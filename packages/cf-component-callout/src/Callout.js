const React = require('react');
const { PropTypes } = React;

class Callout extends React.Component {
  render() {
    return (
      <div className={'cf-callout cf-callout--' + this.props.type}>
        <h3 className="cf-callout__heading">
          {this.props.title}
        </h3>
        <p className="cf-callout__content">
          {this.props.content}
        </p>
      </div>
    );
  }
}

Callout.propTypes = {
  type: PropTypes.oneOf(['default', 'info']),
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

Callout.defaultProps = {
  type: 'default'
};

module.exports = Callout;
