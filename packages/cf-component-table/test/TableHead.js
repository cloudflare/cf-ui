import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  createTableHead
} from '../../cf-component-table/src/index';
import { felaTestContext } from 'cf-style-provider';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('TableHead', () => {
  it('should render', () => {
    const wrapper = mount(
      felaTestContext(
        <table>
          <TableHead>
            <TableRow />
          </TableHead>
        </table>
      )
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should pass down CSS query props', () => {
    const wrapper = mount(
      felaTestContext(
        <table>
          <TableHead striped hover bordered condensed bare>
            <TableRow />
            <TableRow />
          </TableHead>
        </table>
      )
    );

    const trs = wrapper.find(TableRow);

    for (let i = 0; i < 2; i++) {
      expect(trs.at(i).prop('condensed')).toBeTruthy();
      expect(trs.at(i).prop('striped')).toBeTruthy();
      expect(trs.at(i).prop('bordered')).toBeTruthy();
      expect(trs.at(i).prop('hover')).toBeTruthy();
      expect(trs.at(i).prop('bare')).toBeTruthy();
      expect(trs.at(i).prop('theadIndex')).toBe(0);
    }

    expect(trs.at(0).prop('rowIndex')).toBe(0);
    expect(trs.at(1).prop('rowIndex')).toBe(-1);
  });

  it('should compose with styles overrides', () => {
    const TableHead = createTableHead(({ theme }) => ({
      verticalAlign: 'right',
      [`@media (min-width: ${theme.breakpoints.desktopLarge})`]: {
        width: '1000px'
      }
    }));
    const tree = mount(felaTestContext(<Table><TableHead /></Table>));
    expect(toJSON(tree)).toMatchSnapshot();
  });
});

describe('createTableHead', () => {
  it('should compose with styles overrides', () => {
    const TableHead = createTableHead(({ theme }) => ({
      verticalAlign: 'right',
      [`@media (min-width: ${theme.breakpoints.desktopLarge})`]: {
        width: '1000px'
      }
    }));
    const snapshot = toJSON(
      mount(
        felaTestContext(
          <table>
            <TableHead />
          </table>
        )
      )
    );
    expect(snapshot).toMatchSnapshot();
  });

  it('should be able to render a div', () => {
    const TableHead = createTableHead(({ theme }) => ({
      verticalAlign: 'right',
      [`@media (min-width: ${theme.breakpoints.desktopLarge})`]: {
        width: '1000px'
      }
    }));
    const snapshot = toJSON(
      mount(
        felaTestContext(
          <Table is="div">
            <TableHead is="div">
              <TableRow is="div">
                <TableCell is="div" />
              </TableRow>
            </TableHead>
          </Table>
        )
      )
    );
    expect(snapshot).toMatchSnapshot();
  });
});
