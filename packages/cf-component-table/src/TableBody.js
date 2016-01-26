import React from 'react';

export default class TableBody extends React.Component {
  render() {
    return (
      <tbody className="cf-table__body">
        {this.props.children}
      </tbody>
    );
  }
}
