import React from 'react';

export default class Kbd extends React.Component {
  render() {
    return (
      <kbd className="cf-kbd">
        {this.props.children}
      </kbd>
    );
  }
}
