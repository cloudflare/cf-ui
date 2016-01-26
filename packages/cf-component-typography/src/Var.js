import React from 'react';

export default class Var extends React.Component {
  render() {
    return (
      <var className="cf-var">
        {this.props.children}
      </var>
    );
  }
}
