import React from 'react';
import PropTypes from 'prop-types';
import Link from 'cf-component-link';
import { createComponent } from 'cf-style-container';

import DropdownRegistry from './DropdownRegistry';

const styled = ({ theme }) => ({
  position: 'relative',
  zIndex: 1,

  '&:first-child': {
    borderTopWidth: 0
  },

  '& > a': {
    display: 'block',
    padding: '0.2rem 1.06667rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',

    '&:hover': {
      color: theme.colorWhite,
      background: theme.color.marine
    },

    '&:focus': {
      color: theme.colorWhite,
      background: theme.color.sky,
      outline: '5px auto -webkit-focus-ring-color',
      outlineOffset: '-1px'
    },

    '&:active': {
      color: theme.colorWhite,
      background: theme.color.rain
    }
  }
});

class DropdownLink extends React.Component {
  constructor(props, context) {
    if (!props.to && !props.onClick) {
      throw new Error(
        '<DropdownLink/> requires either a `to` or `onClick` prop'
      );
    }

    super(props, context);
    this.dropdownRegistry = context.dropdownRegistry;

    this.handleLinkBlur = this.handleLinkBlur.bind(this);
    this.handleLinkFocus = this.handleLinkFocus.bind(this);
    this.focus = this.focus.bind(this);
  }

  componentDidMount() {
    this.dropdownRegistry.addChild(this);
  }

  componentWillUnmount() {
    this.dropdownRegistry.removeChild(this);
  }

  focus() {
    this.link.focus();
  }

  handleLinkFocus() {
    this.dropdownRegistry.setFocusedChild(this);
  }

  handleLinkBlur() {
    this.dropdownRegistry.removeFocusedChild();
  }

  render() {
    return (
      <li className={this.props.className} role="menuitem">
        <Link
          ref={node => this.link = node}
          to={this.props.to}
          onClick={this.props.onClick}
          onFocus={this.handleLinkFocus}
          onBlur={this.handleLinkBlur}
        >
          {this.props.children}
        </Link>
      </li>
    );
  }
}

DropdownLink.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};

DropdownLink.contextTypes = {
  dropdownRegistry: PropTypes.instanceOf(DropdownRegistry).isRequired
};

export default createComponent(styled, DropdownLink);
