// @flow

const React = require('react');
const {PropTypes} = React;

class LayoutColumn extends React.Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    children: PropTypes.node
  };

  render() {
    const width = (this.props.width * 100).toPrecision(5) + '%';
    return (
      <div className="cf-layout__column" style={{ width }}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = LayoutColumn;
