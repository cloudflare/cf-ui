import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'cf-component-icon';
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
  ({ theme }) => ({
    userSelect: theme.link.userSelect,
    position: theme.link.position,
    display: theme.link.display,
    paddingTop: theme.link.paddingTop,
    paddingBottom: theme.link.paddingBottom,
    paddingLeft: theme.link.paddingLeft,
    paddingRight: theme.link.paddingRight,
    textDecoration: theme.link.textDecoration,
    fontWeight: theme.link.fontWeight,
    color: theme.link.color,
    ':focus': {
      zIndex: theme.link['zIndex:focus']
    }
  }),
  'a',
  ['onClick', 'href', 'aria-label']
);

class PaginationItem extends React.Component {
  render() {
    const props = this.props;
    const isEllipsis = props.type === 'ellipsis';
    const isLoading = props.type === 'loading';

    const role = isEllipsis ? 'presentation' : null;

    let children;

    if (isEllipsis) {
      children = <span>…</span>;
    } else if (isLoading) {
      children = <Icon type="loading" label={false} />;
    } else {
      children = props.children;
    }

    return (
      <li className={props.className} role={role}>
        <Link
          onClick={props.onClick}
          className={props.className}
          href="#"
          aria-label={props.label}
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
