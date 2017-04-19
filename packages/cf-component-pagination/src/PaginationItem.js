import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'cf-component-icon';
import { combineRules, createComponent } from 'cf-style-container';
import { PaginationLink } from './index';

const active = ({ active, theme }) => {
  if (!active) return {};

  return {
    color: theme.colorActive,
    borderColor: theme.borderColorActive,
    backgroundColor: theme.backgroundColorActive,
    zIndex: theme.zIndexActive
  };
};

const disabled = ({ disabled, theme }) => {
  if (!disabled) return {};

  return {
    color: theme.colorDisabled,
    backgroundColor: theme.backgroundColorDisabled
  };
};

const normal = ({ theme, type: itemType }) => ({
  float: theme.float,
  position: theme.position,
  backgroundColor: theme.backgroundColor,
  color: theme.color,
  border: theme.border,
  borderBottomWidth: theme.borderBottomWidth,
  ...theme[itemType]
});

const styles = combineRules(normal, active, disabled);

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
    const clickable = !(props.active || props.disabled || isEllipsis);
    return (
      <li className={props.className} role={role}>
        <PaginationLink
          onClick={props.onClick}
          clickable={clickable}
          children={children}
          label={props.label}
          active={props.active}
          disabled={props.disabled}
          type={props.type}
        />
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
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

export default createComponent(styles, PaginationItem);
