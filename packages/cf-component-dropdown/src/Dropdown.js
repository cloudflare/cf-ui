import React, {PropTypes} from 'react';
import DropdownRegistry from './DropdownRegistry';
import {canUseDOM} from 'exenv';

export default class Dropdown extends React.Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    align: PropTypes.oneOf(['left', 'right'])
  };

  static defaultProps = {
    align: 'left'
  };

  static childContextTypes = {
    dropdownRegistry: PropTypes.instanceOf(DropdownRegistry).isRequired
  };

  getChildContext() {
    return {
      dropdownRegistry: this.dropdownRegistry
    };
  }

  constructor(props, context) {
    super(props, context);
    this.dropdownRegistry = new DropdownRegistry();
  }

  componentDidMount() {
    if (canUseDOM) {
      global.document.addEventListener('keydown', this.handleDocumentKeydown);
      global.document.addEventListener('click', this.handleDocumentClick);
    }
  }

  componentWillUnmount() {
    if (canUseDOM) {
      global.document.removeEventListener('keydown', this.handleDocumentKeydown);
      global.document.removeEventListener('click', this.handleDocumentClick);
    }
  }

  handleDocumentKeydown = event => {
    const keyCode = event.keyCode;

    if (keyCode === 40) { // down
      event.preventDefault();
      this.dropdownRegistry.focusNext();
    } else if (keyCode === 38) { // up
      event.preventDefault();
      this.dropdownRegistry.focusPrev();
    } else if (keyCode === 27) { // esc
      this.props.onClose();
    }
  };

  handleDocumentClick = event => {
    this.props.onClose();
  };

  render() {
    return (
      <ul role="menu" className={`cf-dropdown cf-dropdown--${this.props.align}`}>
        {this.props.children}
      </ul>
    );
  }
}
