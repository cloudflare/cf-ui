import React from 'react';
import renderer from 'react-test-renderer';
import {
  TableHeadCell,
  createTableHeadCell
} from '../../cf-component-table/src/index';
import { felaSnapshot } from 'cf-style-provider';

describe('TableHeadCell', () => {
  it('should render', () => {
    const snapshot = felaSnapshot(<TableHeadCell>TableHeadCell</TableHeadCell>);
    expect(snapshot).toMatchSnapshot();
  });

  it('should compose with styles overrides', () => {
    const TableHeadCell = createTableHeadCell(({ theme }) => ({
      verticalAlign: 'right',
      [`@media (min-width: ${theme.breakpoints.desktopLarge})`]: {
        width: '1000px'
      }
    }));
    const snapshot = felaSnapshot(<TableHeadCell>TableHeadCell</TableHeadCell>);
    expect(snapshot).toMatchSnapshot();
  });
});
