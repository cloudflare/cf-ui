const React = require('react');

class HeadingCaption extends React.Component {
  render() {
    return (
      <small className="cf-heading__caption">
        {this.props.children}
      </small>
    );
  }
}

module.exports = HeadingCaption;
