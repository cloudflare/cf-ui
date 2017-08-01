import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  createTableBody
} from '../../cf-component-table/src/index';
import felaTestContext from '../../cf-style-provider/src/felaTestContext';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('TableBody', () => {
  it('should render', () => {
    const wrapper = mount(
      felaTestContext(
        <table>
          <TableBody>
            <TableRow />
          </TableBody>
        </table>
      )
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should pass down CSS query props', () => {
    const wrapper = mount(
      felaTestContext(
        <table>
          <TableBody striped hover bordered condensed bare>
            <TableRow />
            <TableRow />
          </TableBody>
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
      expect(trs.at(i).prop('tbodyIndex')).toBe(0);
    }

    expect(trs.at(0).prop('rowIndex')).toBe(0);
    expect(trs.at(1).prop('rowIndex')).toBe(-1);
  });

  it('should compose with styles overrides', () => {
    const TableBody = createTableBody(({ theme }) => ({
      verticalAlign: 'right',
      [`@media (min-width: ${theme.breakpoints.desktopLarge})`]: {
        width: '1000px'
      }
    }));
    const tree = mount(felaTestContext(<Table><TableBody /></Table>));
    expect(toJSON(tree)).toMatchSnapshot();
  });
});

describe('createTableBody', () => {
  it('should compose with styles overrides', () => {
    const TableBody = createTableBody(({ theme }) => ({
      verticalAlign: 'right',
      [`@media (min-width: ${theme.breakpoints.desktopLarge})`]: {
        width: '1000px'
      }
    }));
    const snapshot = toJSON(
      mount(
        felaTestContext(
          <table>
            <TableBody />
          </table>
        )
      )
    );
    expect(snapshot).toMatchSnapshot();
  });

  it('should be able to render a div', () => {
    const TableBody = createTableBody(({ theme }) => ({
      verticalAlign: 'right',
      [`@media (min-width: ${theme.breakpoints.desktopLarge})`]: {
        width: '1000px'
      }
    }));
    const snapshot = toJSON(
      mount(
        felaTestContext(
          <Table is="div">
            <TableBody is="div">
              <TableRow is="div">
                <TableCell is="div" />
              </TableRow>
            </TableBody>
          </Table>
        )
      )
    );
    expect(snapshot).toMatchSnapshot();
  });
});
