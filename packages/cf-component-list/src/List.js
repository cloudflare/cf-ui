const React = require('react');
const {PropTypes} = React;

class List extends React.Component {
  static propTypes = {
    ordered: PropTypes.bool,
    unstyled: PropTypes.bool
  };

  static defaultProps = {
    ordered: false,
    unstyled: false
  };

  render() {
    let tagName = 'ul';
    let className = 'cf-list';

    if (this.props.ordered) {
      tagName = 'ol';
      className += ' cf-list--ordered';
    }

    if (this.props.unstyled) {
      className += ' cf-list--unstyled';
    }

    return React.createElement(tagName, { className }, this.props.children);
  }
}

module.exports = List;
