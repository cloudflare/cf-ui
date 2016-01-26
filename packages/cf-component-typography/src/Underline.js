import React from 'react';

export default class Underline extends React.Component {
  render() {
    return (
      <u className="cf-underline">
        {this.props.children}
      </u>
    );
  }
}
