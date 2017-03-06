# cf-component-table

> Cloudflare Table Component

## Installation

```sh
$ npm install cf-component-table
```

## Usage

```js
const React = require('react');
const {
  Table,
  TableHead,
  TableBody,
  TableFoot,
  TableRow,
  TableHeadCell,
  TableCell
} = require('../../src/index');

export default class Application extends React.Component {
  render() {
    const data = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    return (
      <div>
        <h1>Cloudflare Table Component Example</h1>
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
      </div>
    );
  }
}
```
