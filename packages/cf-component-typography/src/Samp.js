import React from 'react';

export default class Samp extends React.Component {
  render() {
    return (
      <samp className="cf-samp">
        {this.props.children}
      </samp>
    );
  }
}
