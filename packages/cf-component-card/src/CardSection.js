const React = require('react');
const { PropTypes } = React;

class CardSection extends React.Component {
  render() {
    return (
      <div
        className={'cf-card__section cf-card__section--' + this.props.status}
      >
        {this.props.children}
      </div>
    );
  }
}

CardSection.propTypes = {
  status: PropTypes.oneOf(['default', 'error']),
  children: PropTypes.node
};

CardSection.defaultProps = {
  status: 'default'
};

module.exports = CardSection;
