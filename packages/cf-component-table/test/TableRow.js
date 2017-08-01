import React from 'react';
import renderer from 'react-test-renderer';
import {
  TableRow,
  TableCell,
  createTableRow
} from '../../cf-component-table/src/index';
import felaTestContext from '../../cf-style-provider/src/felaTestContext';
import felaSnapshot from '../../cf-style-provider/src/felaSnapshot';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('TableRow', () => {
  it('should render', () => {
    const snapshot = felaSnapshot(<TableRow>TableRow</TableRow>);
    expect(snapshot).toMatchSnapshot();
  });

  it('should render with type', () => {
    const snapshot = felaSnapshot(<TableRow type="error">TableRow</TableRow>);
    expect(snapshot).toMatchSnapshot();
  });

  it('should pass down CSS query props', () => {
    const wrapper = mount(
      felaTestContext(
        <table>
          <tbody>
            <TableRow
              condensed
              striped
              bordered
              hover
              bare
              type="info"
              theadIndex={0}
              tbodyIndex={0}
              tfootIndex={0}
              rowIndex={0}
            >
              <TableCell />
              <TableCell />
            </TableRow>
          </tbody>
        </table>
      )
    );

    const cells = wrapper.find(TableCell);

    for (let i = 0; i < 2; i++) {
      expect(cells.at(i).prop('condensed')).toBeTruthy();
      expect(cells.at(i).prop('striped')).toBeTruthy();
      expect(cells.at(i).prop('bordered')).toBeTruthy();
      expect(cells.at(i).prop('hover')).toBeTruthy();
      expect(cells.at(i).prop('bare')).toBeTruthy();
      expect(cells.at(i).prop('rowType')).toBe('info');
      expect(cells.at(i).prop('theadIndex')).toBe(0);
      expect(cells.at(i).prop('tbodyIndex')).toBe(0);
      expect(cells.at(i).prop('tfootIndex')).toBe(0);
      expect(cells.at(i).prop('rowIndex')).toBe(0);
    }

    expect(cells.at(0).prop('cellIndex')).toBe(0);
    expect(cells.at(1).prop('cellIndex')).toBe(-1);
  });

  it('should compose with styles overrides', () => {
    const TableRow = createTableRow(({ theme }) => ({
      verticalAlign: 'right',
      [`@media (min-width: ${theme.breakpoints.desktopLarge})`]: {
        width: '1000px'
      }
    }));
    const snapshot = felaSnapshot(<TableRow><TableCell /></TableRow>);
    expect(snapshot).toMatchSnapshot();
  });
});

describe('createTableRow', () => {
  it('should compose with styles overrides', () => {
    const TableRow = createTableRow(({ theme }) => ({
      verticalAlign: 'right',
      [`@media (min-width: ${theme.breakpoints.desktopLarge})`]: {
        width: '1000px'
      }
    }));
    const snapshot = felaSnapshot(<TableRow><TableCell /></TableRow>);
    expect(snapshot).toMatchSnapshot();
  });

  it('should be able to render a div', () => {
    const TableRow = createTableRow(({ theme }) => ({
      verticalAlign: 'right',
      [`@media (min-width: ${theme.breakpoints.desktopLarge})`]: {
        width: '1000px'
      }
    }));
    const snapshot = felaSnapshot(
      <TableRow is="div"><TableCell is="div" /></TableRow>
    );
    expect(snapshot).toMatchSnapshot();
  });
});
