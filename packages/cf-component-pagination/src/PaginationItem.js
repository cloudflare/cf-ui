import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'cf-component-icon';
import { combineRules, createComponent } from 'cf-style-container';

const active = ({ active, theme }) => {
  if (!active) return {};

  return {
    color: theme.colorActive,
    borderColor: theme.borderColorActive,
    backgroundColor: theme.backgroundColorActive,
    zIndex: theme.zIndexActive,
    cursor: theme.cursorActive
  };
};

const disabled = ({ disabled, theme }) => {
  if (!disabled) return {};

  return {
    color: theme.colorDisabled,
    backgroundColor: theme.backgroundColorDisabled,
    cursor: theme.cursorDisabled
  };
};

const normal = ({ theme, type: itemType }) => ({
  float: theme.float,
  position: theme.position,
  backgroundColor: theme.backgroundColor,
  color: theme.color,
  border: theme.border,
  borderBottomWidth: theme.borderBottomWidth,
  cursor: theme.cursor,
  ...theme[itemType]
});

const styles = combineRules(normal, active, disabled);

const Link = createComponent(
  ({ theme, disabled, active }) => {
    let cursor = theme.cursor;
    if (disabled) {
      cursor = theme.cursorDisabled;
    }
    if (active) {
      cursor = theme.cursorActive;
    }

    return {
      userSelect: theme.link.userSelect,
      position: theme.link.position,
      display: theme.link.display,
      paddingTop: theme.link.paddingTop,
      paddingBottom: theme.link.paddingBottom,
      paddingLeft: theme.link.paddingLeft,
      paddingRight: theme.link.paddingRight,
      textDecoration: theme.link.textDecoration,
      color: theme.link.color,
      cursor: cursor,
      ':focus': {
        zIndex: theme.link['zIndex:focus']
      }
    };
  },
  'a',
  ['onClick', 'href', 'aria-label']
);

class PaginationItem extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.props.onClick();
  }

  render() {
    const props = this.props;
    const isEllipsis = props.type === 'ellipsis';
    const isLoading = props.type === 'loading';

    const role = isEllipsis ? 'presentation' : null;

    let children;

    if (isEllipsis) {
      children = <span>…</span>;
    } else if (isLoading) {
      // TODO Change this to new Loading component
      children = <Icon type="list" label={false} />;
    } else {
      children = props.children;
    }

    return (
      <li className={props.className} role={role}>
        <Link
          onClick={this.onClick}
          href="#"
          aria-label={props.label}
          active={props.active}
          disabled={props.disabled}
        >
          {children}
        </Link>
      </li>
    );
  }
}

PaginationItem.propTypes = {
  type: PropTypes.oneOf([
    'number',
    'next',
    'prev',
    'ellipsis',
    'loading',
    'dot'
  ]).isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func
};

PaginationItem.defaultProps = {
  disabled: false
};

export default createComponent(styles, PaginationItem);
