const React = require('react');
const {PropTypes} = React;

class Page extends React.Component {
  render() {
    return (
      <article className="cf-page">
        {this.props.children}
      </article>
    );
  }
}

Page.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = Page;
