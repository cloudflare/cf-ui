import React, { PropTypes, Component } from 'react';
import { createComponent } from 'cf-style-container';

const styles = ({ theme, disabled, active }) => ({
  position: theme.position,
  display: theme.display,
  paddingTop: theme.paddingTop,
  paddingBottom: theme.paddingBottom,
  paddingLeft: theme.paddingLeft,
  paddingRight: theme.paddingRight,
  textDecoration: theme.textDecoration,
  fontWeight: theme.fontWeight,
  color: theme.color,
  ':focus': {
    zIndex: theme['zIndex:focus']
  },
  cursor: (disabled && theme.cursorDisabled) || (active && theme.cursorActive)
});

class PaginationLink extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    const { clickable, label, children, className } = this.props;

    if (clickable) {
      return (
        <a
          className={className}
          href="#"
          onClick={this.handleClick}
          aria-label={label}
        >
          {children}
        </a>
      );
    }

    return (
      <span className={className} aria-label={label}>
        {children}
      </span>
    );
  }
}

PaginationLink.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  clickable: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired
};

export default createComponent(styles, PaginationLink);
