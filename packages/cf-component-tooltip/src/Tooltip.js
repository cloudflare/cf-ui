const React = require('react');
const { PropTypes } = React;
const { findDOMNode } = require('react-dom');
const createTooltip = require('./createTooltip');

class Tooltip extends React.Component {
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

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  position: PropTypes.string
};

Tooltip.defaultProps = {
  position: 'top center'
};

module.exports = Tooltip;
