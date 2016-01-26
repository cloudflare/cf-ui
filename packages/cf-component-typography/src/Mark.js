import React from 'react';

export default class Mark extends React.Component {
  render() {
    return (
      <mark className="cf-mark">
        {this.props.children}
      </mark>
    );
  }
}
