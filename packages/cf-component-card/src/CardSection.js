// @flow

const React = require('react');
const {PropTypes} = React;

class CardSection extends React.Component {
  static propTypes = {
    status: PropTypes.oneOf([
      'default',
      'error'
    ]),
    children: PropTypes.node
  };

  static defaultProps = {
    status: 'default'
  };

  render() {
    return (
      <div className={'cf-card__section cf-card__section--' + this.props.status}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = CardSection;
