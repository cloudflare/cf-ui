import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';

import CardSection from './CardSection';
import CardToolbar from './CardToolbar';
import CardToolbarLink from './CardToolbarLink';
import CardPropTypes from './CardPropTypes';

let UNIQUE_ID = 0;

const Drawer = createComponent(
  ({ theme, isActive }) => ({
    borderTop: isActive ? `1px solid ${theme.colorGrayLight}` : 'initial',
    padding: isActive ? '1.5rem' : 'initial'
  }),
  'div',
  ['key', 'id', 'onClick']
);

class CardDrawers extends React.Component {
  constructor(props) {
    super(props);

    this._cardId = UNIQUE_ID++;

    this.state = {
      active: null
    };
  }

  handleLinkClick(id) {
    this.props.onClick && this.props.onClick(id);

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

      drawers.push(
        <Drawer
          key={drawer.id}
          role="tabpanel"
          aria-labelledby={id}
          aria-hidden={isActive ? 'false' : 'true'}
          isActive={isActive}
        >
          {isActive && drawer.content}
        </Drawer>
      );
    });

    return (
      <CardSection>
        <CardToolbar controls={this.props.controls} links={links} />
        <div>{drawers}</div>
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
