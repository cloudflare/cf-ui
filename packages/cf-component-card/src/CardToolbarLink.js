import React from 'react';
import PropTypes from 'prop-types';
import Link from 'cf-component-link';
import { createComponent } from 'cf-style-container';

const styles = ({ isActive, expandable, theme }) => ({
  position: 'relative',
  display: 'inline-block',
  padding: '0.73333rem 2em 0.73333rem 0.5rem',
  lineHeight: theme.lineHeight,

  '&::after': expandable
    ? {
        content: "'\\f003'",
        fontFamily: '"cloudflare-font"',
        fontStyle: 'normal',
        fontWeight: 'normal',
        marginTop: '-0.7em',

        position: 'absolute',
        top: '51%',
        right: '1rem',
        transition: 'transform 0.2s ease',
        transform: isActive ? 'rotate(90deg)' : 'initial'
      }
    : {}
});

class CardToolbarLink extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    const { id, className, to, children } = this.props;
    return (
      <Link
        role="tab"
        id={id}
        className={className}
        to={to}
        onClick={this.handleClick}
      >
        {children}
      </Link>
    );
  }
}

CardToolbarLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  id: PropTypes.string,
  children: PropTypes.node,
  expandable: PropTypes.bool
};

CardToolbarLink.defaultProps = {
  expandable: true
};

export default createComponent(styles, CardToolbarLink, ['isActive', 'expandable', 'to']);
