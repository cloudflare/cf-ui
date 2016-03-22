const React = require('react');
const {PropTypes} = React;

class FlexItem extends React.Component {
  static propTypes = {
    collapse: PropTypes.bool
  };

  static defaultProps = {
    collapse: false
  };

  render() {
    let className = 'cf-flex__item';

    if (this.props.collapse) {
      className += ' cf-flex__item--collapse';
    }

    return <div className={className}>{this.props.children}</div>;
  }
}

module.exports = FlexItem;
