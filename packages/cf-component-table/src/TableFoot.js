import React from 'react';

export default class TableFoot extends React.Component {
  render() {
    return (
      <tfoot className="cf-table__foot">
        {this.props.children}
      </tfoot>
    );
  }
}
