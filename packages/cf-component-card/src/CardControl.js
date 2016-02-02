const React = require('react');

class CardControl extends React.Component {
  render() {
    return (
      <div className="cf-card__control">
        {this.props.children}
      </div>
    );
  }
}

module.exports = CardControl;
