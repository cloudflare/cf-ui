import React from 'react';

export default class Strong extends React.Component {
  render() {
    return (
      <strong className="cf-strong">
        {this.props.children}
      </strong>
    );
  }
}
