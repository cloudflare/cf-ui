const React = require('react');
const {PropTypes} = React;

class CardToolbarLink extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    id: PropTypes.string
  };

  handleClick = e => {
    e.preventDefault();
    this.props.onClick();
  };

  render() {
    let className = 'cf-card__toolbar_link';

    if (this.props.isActive) {
      className += ' cf-card__toolbar_link--open';
    }

    return (
      <a href="#" role="tab" id={this.props.id} className={className} onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

module.exports = CardToolbarLink;
