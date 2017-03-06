import React, { PropTypes } from 'react';

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
