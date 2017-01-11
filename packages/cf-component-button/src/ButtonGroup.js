// @flow

const React = require('react');
const {PropTypes} = React;

class ButtonGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div className='cf-btn__group'>
        {this.props.children}
      </div>
    );
  }
}

module.exports = ButtonGroup;
