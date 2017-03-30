import React, { PropTypes } from "react";
import Icon from "cf-component-icon";
import PaginationLink from "./PaginationLink";

const PaginationItem = props => {
  let className = "cf-pagination__item cf-pagination__item--" + props.type;

  if (props.active) className += " cf-pagination__item--active";
  if (props.disabled) className += " cf-pagination__item--disabled";

  const isEllipsis = props.type === "ellipsis";
  const isLoading = props.type === "loading";

  const role = isEllipsis ? "presentation" : null;

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
    <li className={className} role={role}>
      <PaginationLink
        onClick={props.onClick}
        clickable={clickable}
        children={children}
        label={props.label}
      />
    </li>
  );
};

PaginationItem.propTypes = {
  type: PropTypes.oneOf([
    "number",
    "next",
    "prev",
    "ellipsis",
    "loading"
  ]).isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

export default PaginationItem;
