const React = require('react');
const {PropTypes} = React;

class Flex extends React.Component {
  render() {
    let className = 'cf-flex';

    if (this.props.spacing) {
      className += ' cf-flex--' + this.props.spacing;
    }

    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

Flex.propTypes = {
  spacing: PropTypes.oneOf([
    false,
    'thin',
    'wide'
  ]).isRequired,
  children: PropTypes.node
};

module.exports = Flex;
