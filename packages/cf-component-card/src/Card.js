import React, { PropTypes } from 'react';

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

export default Card;
