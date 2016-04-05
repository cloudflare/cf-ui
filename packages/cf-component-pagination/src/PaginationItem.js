const React = require('react');
const {PropTypes} = React;

class PaginationItem extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['number', 'next', 'prev']).isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool,
    disabled: PropTypes.bool
  };

  handleClick = e => {
    e.preventDefault();
    this.props.onClick();
  };

  render() {
    let className = 'cf-pagination__item cf-pagination__item--' + this.props.type;

    if (this.props.active) className += ' cf-pagination__item--active';
    if (this.props.disabled) className += ' cf-pagination__item--disabled';

    return (
      <li className={className}>
        {(this.props.active || this.props.disabled) ? (
          <span className="cf-pagination__link" aria-label={this.props.label}>
            {this.props.children}
          </span>
        ) : (
          <a className="cf-pagination__link" href="#" onClick={this.handleClick} aria-label={this.props.label}>
            {this.props.children}
          </a>
        )}
      </li>
    );
  }
}

module.exports = PaginationItem;
