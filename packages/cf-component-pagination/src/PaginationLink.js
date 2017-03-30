import React, { PropTypes, Component } from "react";

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
    const { clickable, label, children } = this.props;

    if (clickable) {
      return (
        <a
          className="cf-pagination__link"
          href="#"
          onClick={this.handleClick}
          aria-label={label}
        >
          {children}
        </a>
      );
    }

    return (
      <span className="cf-pagination__link" aria-label={label}>
        {children}
      </span>
    );
  }
}

PaginationLink.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  clickable: PropTypes.bool,
  label: PropTypes.string.isRequired
};

export default PaginationLink;
