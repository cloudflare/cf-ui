import React from 'react';

import PropTypes from 'prop-types';

class CardControl extends React.Component {
  render() {
    const className = 'cf-card__control' +
      (this.props.wide ? ' cf-card__control--wide' : '');

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

CardControl.propTypes = {
  children: PropTypes.node,
  wide: PropTypes.bool
};

export default CardControl;
