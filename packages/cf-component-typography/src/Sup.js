import React from 'react';

export default class Sup extends React.Component {
  render() {
    return (
      <sup className="cf-sup">
        {this.props.children}
      </sup>
    );
  }
}
