import React, { PropTypes } from 'react';
import CardSection from './CardSection';
import CardToolbar from './CardToolbar';
import CardToolbarLink from './CardToolbarLink';
import CardPropTypes from './CardPropTypes';

let UNIQUE_ID = 0;

class CardDrawers extends React.Component {
  constructor(props) {
    super(props);
    this._cardId = UNIQUE_ID++;
  }

  render() {
    const links = [];
    const drawers = [];

    this.props.drawers.forEach(drawer => {
      const isActive = drawer.id === this.props.active;
      const id = `card-${this._cardId}-drawer-${drawer.id}`;

      links.push(
        <CardToolbarLink
          key={drawer.id}
          id={id}
          isActive={isActive}
          onClick={this.props.onClick.bind(null, drawer.id)}
        >
          {drawer.name}
        </CardToolbarLink>
      );

      let className = 'cf-card__drawer';

      if (isActive) {
        className += ' cf-card__drawer--active';
      }

      drawers.push(
        <div
          key={drawer.id}
          role="tabpanel"
          aria-labelledby={id}
          aria-hidden={isActive ? 'false' : 'true'}
          className={className}
        >
          {isActive && drawer.content}
        </div>
      );
    });

    let containerClassName = 'cf-card__drawers_container';

    if (this.props.active) {
      containerClassName += ' cf-card__drawers_container--open';
    }

    return (
      <CardSection>
        <CardToolbar controls={this.props.controls} links={links} />
        <div className={containerClassName}>
          {drawers}
        </div>
      </CardSection>
    );
  }
}

CardDrawers.propTypes = {
  onClick: PropTypes.func.isRequired,

  active: PropTypes.string,
  drawers: CardPropTypes.cardDrawers.isRequired,

  // for an optional control to put on the left side of the toolbar
  controls: PropTypes.any
};

export default CardDrawers;
