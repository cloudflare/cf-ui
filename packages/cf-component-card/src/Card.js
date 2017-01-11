// @flow

const React = require('react');
const {PropTypes} = React;

class Card extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <section className="cf-card">
        {this.props.children}
      </section>
    );
  }
}

module.exports = Card;
