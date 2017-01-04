const React = require('react');
const {PropTypes} = React;

class CardControl extends React.Component {
  render() {
    const className = 'cf-card__control' + (this.props.wide ? ' cf-card__control--wide' : '');

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

CardControl.propTypes = {
  children: PropTypes.node,
  wide: PropTypes.bool
};

module.exports = CardControl;
