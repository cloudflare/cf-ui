// @flow

const React = require('react');
const {PropTypes} = React;

class CardControl extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    wide: PropTypes.bool
  };

  render() {
    const className = 'cf-card__control' + (this.props.wide ? ' cf-card__control--wide' : '');

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = CardControl;
