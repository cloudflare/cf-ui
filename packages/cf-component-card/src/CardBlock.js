import React from 'react';

import PropTypes from 'prop-types';

class CardBlock extends React.Component {
  render() {
    const className = 'cf-card__block';

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

CardBlock.propTypes = {
  children: PropTypes.node
};

export default CardBlock;
