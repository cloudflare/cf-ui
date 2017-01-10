// @flow

const React = require('react');
const {PropTypes} = React;

class Page extends React.Component {
  propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <article className="cf-page">
        {this.props.children}
      </article>
    );
  }
}

module.exports = Page;
