import React from 'react';

import PropTypes from 'prop-types';

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
