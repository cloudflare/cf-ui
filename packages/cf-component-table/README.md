# cf-component-table

> Cloudflare Table Component

## Installation

```sh
$ npm install cf-component-table
```

## Usage

```jsx
import React from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableFoot,
  TableRow,
  TableHeadCell,
  TableCell
} from 'cf-component-table';

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const TableComponent = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeadCell>One</TableHeadCell>
        <TableHeadCell>Two</TableHeadCell>
        <TableHeadCell>Three</TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map((row, r) => (
        <TableRow key={r}>
          {row.map((cell, c) => (
            <TableCell key={c}>
              {cell}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default TableComponent;
```
