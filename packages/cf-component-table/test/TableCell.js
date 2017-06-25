import React from 'react';
import renderer from 'react-test-renderer';
import { TableCell, createTableCell } from '../../cf-component-table/src/index';
import { felaSnapshot } from 'cf-style-provider';

describe('TableCell', () => {
  it('should render', () => {
    const snapshot = felaSnapshot(<TableCell>TableCell</TableCell>);
    expect(snapshot).toMatchSnapshot();
  });

  it('should render with align', () => {
    const snapshot = felaSnapshot(
      <TableCell align="center">TableCell</TableCell>
    );
    expect(snapshot).toMatchSnapshot();
  });

  it('should compose with styles overrides', () => {
    const TableCell = createTableCell(({ theme }) => ({
      verticalAlign: 'right',
      [`@media (min-width: ${theme.breakpoints.desktopLarge})`]: {
        width: '1000px'
      }
    }));
    const snapshot = felaSnapshot(<TableCell>TableCell</TableCell>);
    expect(snapshot).toMatchSnapshot();
  });
});
