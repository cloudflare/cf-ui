import React from 'react';

export default class TableHead extends React.Component {
  render() {
    return (
      <thead className="cf-table__head">
        {this.props.children}
      </thead>
    );
  }
}
