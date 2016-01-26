import React from 'react';

export default class Sub extends React.Component {
  render() {
    return (
      <sub className="cf-sub">
        {this.props.children}
      </sub>
    );
  }
}
