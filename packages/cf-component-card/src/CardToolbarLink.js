import React, { PropTypes } from 'react';
import Link from 'cf-component-link';

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
    let className = 'cf-card__toolbar_link';

    if (this.props.isActive) {
      className += ' cf-card__toolbar_link--open';
    }

    return (
      <Link
        role="tab"
        id={this.props.id}
        className={className}
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

export default CardToolbarLink;
