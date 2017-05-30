import React from 'react';

import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    return (
      <section id={this.props.id} className="cf-card">
        {this.props.children}
      </section>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node
};

export default Card;
