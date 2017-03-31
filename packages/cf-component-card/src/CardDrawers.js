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

    this.state = {
      active: null
    };
  }

  handleLinkClick(id) {
    this.props.onClick && this.props.onClick();

    this.setState(state => ({
      active: state.active === id ? null : id
    }));
  }

  render() {
    const active = this.props.hasOwnProperty('active')
      ? this.props.active
      : this.state.active;

    const links = [];
    const drawers = [];

    this.props.drawers.forEach(drawer => {
      const isActive = drawer.id === active;
      const id = `card-${this._cardId}-drawer-${drawer.id}`;

      links.push(
        <CardToolbarLink
          key={drawer.id}
          id={id}
          isActive={isActive}
          onClick={() => this.handleLinkClick(drawer.id)}
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

    if (active) {
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
  onClick: PropTypes.func,

  active: PropTypes.string,
  drawers: CardPropTypes.cardDrawers.isRequired,

  // for an optional control to put on the left side of the toolbar
  controls: PropTypes.any
};

export default CardDrawers;
