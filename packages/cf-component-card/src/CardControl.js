const React = require('react');
const {PropTypes} = React;

class CardControl extends React.Component {
  render() {
    return (
      <div className="cf-card__control">
        {this.props.children}
      </div>
    );
  }
}

CardControl.propTypes = {
  children: PropTypes.node
};

module.exports = CardControl;
