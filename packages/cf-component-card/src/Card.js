const React = require('react');
const {PropTypes} = React;

class Card extends React.Component {
  render() {
    return (
      <section className="cf-card">
        {this.props.children}
      </section>
    );
  }
}

Card.propTypes = {
  children: PropTypes.node
};

module.exports = Card;
