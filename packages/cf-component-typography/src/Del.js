import React from 'react';

export default class Del extends React.Component {
  render() {
    return (
      <del className="cf-del">
        {this.props.children}
      </del>
    );
  }
}
