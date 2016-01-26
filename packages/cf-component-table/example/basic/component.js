import React from 'react';
import {render} from 'react-dom';

import {
  Table,
  TableHead,
  TableBody,
  TableFoot,
  TableRow,
  TableHeadCell,
  TableCell
} from '../../src/index';

class Component extends React.Component {
  render() {
    const data = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>One</TableHeadCell>
            <TableHeadCell>Two</TableHeadCell>
            <TableHeadCell>Three</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row =>
            <TableRow>
              {row.map(cell =>
                <TableCell>{cell}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}

render(
  <Component/>,
  document.getElementById('cf-component-table--basic')
);
