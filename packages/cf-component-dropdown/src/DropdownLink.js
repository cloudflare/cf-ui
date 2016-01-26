import React, {PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import Link from 'cf-component-link';
import DropdownRegistry from './DropdownRegistry';

export default class DropdownLink extends React.Component {
  static propTypes = {
    to: PropTypes.string,
    onClick: PropTypes.func,
  };

  static contextTypes = {
    dropdownRegistry: PropTypes.instanceOf(DropdownRegistry).isRequired
  };

  constructor(props, context) {
    if (!props.to && !props.onClick) {
      throw new Error('<DropdownLink/> requires either a `to` or `onClick` prop');
    }

    super(props, context);
    this.dropdownRegistry = context.dropdownRegistry;
  }

  componentWillMount() {
    this.dropdownRegistry.addChild(this);
  }

  componentWillUnmount() {
    this.dropdownRegistry.removeChild(this);
  }

  focus() {
    findDOMNode(this.refs.link).focus();
  }

  handleLinkFocus = e => {
    this.dropdownRegistry.setFocusedChild(this);
  };

  handleLinkBlur = e => {
    this.dropdownRegistry.removeFocusedChild();
  };

  render() {
    return (
      <li className="cf-dropdown__link" role="menuitem">
        <Link ref="link"
          to={this.props.to}
          onClick={this.props.onClick}
          onFocus={this.handleLinkFocus}
          onBlur={this.handleLinkBlur}>
          {this.props.children}
        </Link>
      </li>
    );
  }
}
