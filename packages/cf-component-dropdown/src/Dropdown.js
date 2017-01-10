// @flow

const React = require('react');
const {PropTypes} = React;
const DropdownRegistry = require('./DropdownRegistry');
const {canUseDOM} = require('exenv');

class Dropdown extends React.Component {
  dropdownRegistry = new DropdownRegistry();

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    align: PropTypes.oneOf(['left', 'right']),
    children: PropTypes.node
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

  handleDocumentKeydown = (event: KeyboardEvent) => {
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

  handleDocumentClick = () => {
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

module.exports = Dropdown;
