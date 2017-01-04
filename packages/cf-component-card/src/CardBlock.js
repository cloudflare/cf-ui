const React = require('react');
const {PropTypes} = React;

class CardBlock extends React.Component {
  render() {
    const className = 'cf-card__block';

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

CardBlock.propTypes = {
  children: PropTypes.node
};

module.exports = CardBlock;
