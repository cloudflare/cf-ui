import React from 'react';

export default class Cite extends React.Component {
  render() {
    return (
      <cite className="cf-cite">
        {this.props.children}
      </cite>
    );
  }
}
