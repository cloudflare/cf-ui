import React from 'react';

export default class Em extends React.Component {
  render() {
    return (
      <em className="cf-em">
        {this.props.children}
      </em>
    );
  }
}
