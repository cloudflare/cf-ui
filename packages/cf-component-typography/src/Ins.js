import React from 'react';

export default class Ins extends React.Component {
  render() {
    return (
      <ins className="cf-ins">
        {this.props.children}
      </ins>
    );
  }
}
