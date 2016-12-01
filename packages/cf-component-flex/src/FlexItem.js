const React = require('react');
const {PropTypes} = React;

class FlexItem extends React.Component {
  render() {
    let className = 'cf-flex__item';

    if (this.props.collapse) {
      className += ' cf-flex__item--collapse';
    }

    return <div className={className}>{this.props.children}</div>;
  }
}

FlexItem.propTypes = {
  collapse: PropTypes.bool,
  children: PropTypes.node
};

FlexItem.defaultProps = {
  collapse: false
};

module.exports = FlexItem;
