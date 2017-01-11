// @flow

const React = require('react');
const {PropTypes} = React;
const {findDOMNode} = require('react-dom');
const createTooltip = require('./createTooltip');

class Tooltip extends React.Component {
  destroyTooltip: () => void;

  static propTypes = {
    content: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    position: PropTypes.string
  };

  static defaultProps = {
    position: 'top center'
  };

  componentDidMount() {
    this.destroyTooltip = createTooltip(
      findDOMNode(this),
      this.props.content,
      this.props.position
    );
  }

  componentWillUnmount() {
    this.destroyTooltip();
  }

  render() {
    return this.props.children;
  }
}

module.exports = Tooltip;
