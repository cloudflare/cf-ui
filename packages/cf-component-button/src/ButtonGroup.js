import React from 'react';

export default class ButtonGroup extends React.Component {
  render() {
    return (
      <div className='cf-btn__group'>
        {this.props.children}
      </div>
    );
  }
}
