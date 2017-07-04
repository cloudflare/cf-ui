import React from 'react';
import PropTypes from 'prop-types';
import Link from 'cf-component-link';
import { createComponent } from 'cf-style-container';

const styles = ({ isActive }) => ({
  position: 'relative',
  display: 'inline-block',
  padding: '0.73333rem 2em 0.73333rem 0.5rem',

  '&::after': {
    content: "'\\f003'",
    fontFamily: '"cloudflare-font"',
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginTop: '-0.7em',

    position: 'absolute',
    top: '60%',
    right: '1rem',
    transition: 'transform 0.2s ease',
    transform: isActive ? 'rotate(90deg)' : 'initial'
  }
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
    return (
      <Link
        role="tab"
        id={this.props.id}
        className={this.props.className}
        onClick={this.handleClick}
      >
        {this.props.children}
      </Link>
    );
  }
}

CardToolbarLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  id: PropTypes.string,
  children: PropTypes.node
};

export default createComponent(styles, CardToolbarLink, ['isActive']);
