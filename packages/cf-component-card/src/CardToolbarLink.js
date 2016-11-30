const React = require('react');
const Link = require('cf-component-link');
const {PropTypes} = React;

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
      <Link role="tab" id={this.props.id} className={className} onClick={this.handleClick}>
        {this.props.children}
      </Link>
    );
  }
}

CardToolbarLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  id: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = CardToolbarLink;
