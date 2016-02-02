const React = require('react');

class Page extends React.Component {
  render() {
    return (
      <article className="cf-page">
        {this.props.children}
      </article>
    );
  }
}

module.exports = Page;
