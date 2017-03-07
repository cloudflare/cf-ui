import React, { PropTypes } from 'react';
import Icon from 'cf-component-icon';

class PaginationItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    let className = 'cf-pagination__item cf-pagination__item--' +
      this.props.type;

    if (this.props.active) className += ' cf-pagination__item--active';
    if (this.props.disabled) className += ' cf-pagination__item--disabled';

    const isEllipsis = this.props.type === 'ellipsis';
    const isLoading = this.props.type === 'loading';

    const role = isEllipsis ? 'presentation' : null;

    let children;

    if (isEllipsis) {
      children = <span>…</span>;
    } else if (isLoading) {
      children = <Icon type="loading" label={false} />;
    } else {
      children = this.props.children;
    }

    return (
      <li className={className} role={role}>
        {this.props.active || this.props.disabled || isEllipsis
          ? <span className="cf-pagination__link" aria-label={this.props.label}>
              {children}
            </span>
          : <a
              className="cf-pagination__link"
              href="#"
              onClick={this.handleClick}
              aria-label={this.props.label}
            >
              {children}
            </a>}
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
    'loading'
  ]).isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

export default PaginationItem;
