import React from 'react';
import PropTypes from 'prop-types';
import { canUseDOM } from 'exenv';
import { createComponent } from 'cf-style-container';

import DropdownRegistry from './DropdownRegistry';

const styles = ({ theme, align }) => ({
  position: 'absolute',
  zIndex: 1,
  minWidth: '10.66667rem',
  margin: '0.5em 0 0',
  padding: '0.33333rem 0',
  listStyle: 'none',
  background: theme.colorWhite,
  border: `1px solid ${theme.colorGrayLight}`,
  borderRadius: theme.borderRadius,
  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',

  left: align === 'left' ? 0 : 'initial',
  right: align === 'right' ? 0 : 'initial',

  animationName: {
    '0%': {
      display: 'none',
      opacity: 0
    },
    '1%': {
      display: 'block',
      opacity: 0,
      top: '80%'
    },
    '100%': {
      display: 'none',
      opacity: 1,
      top: '102%'
    }
  },
  animationDuration: '150ms',
  animationTimingFunction: 'ease-out',

  '&::before': {
    content: "''",
    display: 'block',
    position: 'absolute',
    bottom: '100%',
    border: 'solid transparent',
    borderWidth: '10px',
    borderTopWidth: 0,
    borderBottomColor: theme.colorWhite,
    left: align === 'left' ? '10px' : 'initial',
    right: align === 'right' ? '10px' : 'initial'
  }
});

class Dropdown extends React.Component {
  getChildContext() {
    return {
      dropdownRegistry: this.dropdownRegistry
    };
  }

  constructor(props, context) {
    super(props, context);
    this.dropdownRegistry = new DropdownRegistry();
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleDocumentKeydown = this.handleDocumentKeydown.bind(this);
  }

  componentDidMount() {
    if (canUseDOM) {
      global.document.addEventListener('keydown', this.handleDocumentKeydown);
      global.document.addEventListener('click', this.handleDocumentClick);
    }
  }

  componentWillUnmount() {
    if (canUseDOM) {
      global.document.removeEventListener(
        'keydown',
        this.handleDocumentKeydown
      );
      global.document.removeEventListener('click', this.handleDocumentClick);
    }
  }

  handleDocumentKeydown(event) {
    const keyCode = event.keyCode;

    if (keyCode === 40) {
      // down
      event.preventDefault();
      this.dropdownRegistry.focusNext();
    } else if (keyCode === 38) {
      // up
      event.preventDefault();
      this.dropdownRegistry.focusPrev();
    } else if (keyCode === 27) {
      // esc
      this.props.onClose();
    }
  }

  handleDocumentClick() {
    this.props.onClose();
  }

  render() {
    return (
      <ul className={this.props.className} role="menu">
        {this.props.children}
      </ul>
    );
  }
}

Dropdown.propTypes = {
  onClose: PropTypes.func.isRequired,
  align: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node
};

Dropdown.defaultProps = {
  align: 'left'
};

Dropdown.childContextTypes = {
  dropdownRegistry: PropTypes.instanceOf(DropdownRegistry).isRequired
};

export default createComponent(styles, Dropdown);
