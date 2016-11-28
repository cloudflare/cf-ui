const React = require('react');
const {PropTypes} = React;

class ButtonGroup extends React.Component {
  render() {
    return (
      <div className='cf-btn__group'>
        {this.props.children}
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

module.exports = ButtonGroup;
