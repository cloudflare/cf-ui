import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'cf-style-container';
import clearRenderer from './clearRenderer';

class CloseMenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleTouchDown = () => this.dragging = true;
    this.handleTouchMove = () => this.dragging = false;
    this.handleTouchEnd = () => {
      if (!this.dragging) {
        this.props.closeMenu();
      }
    };
  }
  render() {
    return (
      <span
        className={this.props.className}
        onMouseDown={this.props.closeMenu}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        {clearRenderer()}
      </span>
    );
  }
}

CloseMenuComponent.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  className: PropTypes.string
};

const CloseMenu = createComponent(
  () => ({
    cursor: 'pointer',
    float: 'right'
  }),
  CloseMenuComponent
);

export default CloseMenu;
