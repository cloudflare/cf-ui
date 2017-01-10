// @flow

const React = require('react');
const {PropTypes} = React;

class CardControl extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className="cf-card__control">
        {this.props.children}
      </div>
    );
  }
}

module.exports = CardControl;
