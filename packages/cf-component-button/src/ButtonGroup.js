const React = require('react');

class ButtonGroup extends React.Component {
  render() {
    return (
      <div className='cf-btn__group'>
        {this.props.children}
      </div>
    );
  }
};

module.exports = ButtonGroup;
