import React from 'react';
import renderer from 'react-test-renderer';
import { felaSnapshot, felaTestContext } from 'cf-style-provider';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

import {
  Table,
  TableHead,
  TableBody,
  TableFoot,
  TableRow,
  TableCell,
  createTable
} from '../../cf-component-table/src/index';

describe('Table', () => {
  it('should render', () => {
    const snapshot = felaSnapshot(<Table>Table</Table>);
    expect(snapshot).toMatchSnapshot();
  });

  it('should render striped', () => {
    const snapshot = felaSnapshot(<Table striped>Table</Table>);
    expect(snapshot).toMatchSnapshot();
  });

  it('should render hover', () => {
    const snapshot = felaSnapshot(<Table hover>Table</Table>);
    expect(snapshot).toMatchSnapshot();
  });

  it('should render not bordered', () => {
    const snapshot = felaSnapshot(<Table bordered={false}>Table</Table>);
    expect(snapshot).toMatchSnapshot();
  });

  it('should render condensed', () => {
    const snapshot = felaSnapshot(<Table condensed>Table</Table>);
    expect(snapshot).toMatchSnapshot();
  });

  it('should pass down CSS query props', () => {
    const wrapper = mount(
      felaTestContext(
        <Table striped hover bordered condensed bare>
          <TableHead />
          <TableHead />
          <TableBody />
          <TableBody />
          <TableFoot />
          <TableFoot />
        </Table>
      )
    );

    const thead0 = wrapper.find(TableHead).at(0);
    const thead1 = wrapper.find(TableHead).at(1);
    const tbody0 = wrapper.find(TableBody).at(0);
    const tbody1 = wrapper.find(TableBody).at(1);
    const tfoot0 = wrapper.find(TableFoot).at(0);
    const tfoot1 = wrapper.find(TableFoot).at(1);

    expect(thead0.prop('condensed')).toBeTruthy();
    expect(thead0.prop('striped')).toBeTruthy();
    expect(thead0.prop('bordered')).toBeTruthy();
    expect(thead0.prop('hover')).toBeTruthy();
    expect(thead0.prop('bare')).toBeTruthy();

    expect(thead1.prop('condensed')).toBeTruthy();
    expect(thead1.prop('striped')).toBeTruthy();
    expect(thead1.prop('bordered')).toBeTruthy();
    expect(thead1.prop('hover')).toBeTruthy();
    expect(thead1.prop('bare')).toBeTruthy();

    expect(tbody0.prop('condensed')).toBeTruthy();
    expect(tbody0.prop('striped')).toBeTruthy();
    expect(tbody0.prop('bordered')).toBeTruthy();
    expect(tbody0.prop('hover')).toBeTruthy();
    expect(tbody0.prop('bare')).toBeTruthy();

    expect(tbody1.prop('condensed')).toBeTruthy();
    expect(tbody1.prop('striped')).toBeTruthy();
    expect(tbody1.prop('bordered')).toBeTruthy();
    expect(tbody1.prop('hover')).toBeTruthy();
    expect(tbody1.prop('bare')).toBeTruthy();

    expect(tfoot0.prop('condensed')).toBeTruthy();
    expect(tfoot0.prop('striped')).toBeTruthy();
    expect(tfoot0.prop('bordered')).toBeTruthy();
    expect(tfoot0.prop('hover')).toBeTruthy();
    expect(tfoot0.prop('bare')).toBeTruthy();

    expect(tfoot1.prop('condensed')).toBeTruthy();
    expect(tfoot1.prop('striped')).toBeTruthy();
    expect(tfoot1.prop('bordered')).toBeTruthy();
    expect(tfoot1.prop('hover')).toBeTruthy();
    expect(tfoot1.prop('bare')).toBeTruthy();
  });

  it('should compose with styles overrides', () => {
    const Table = createTable(({ theme }) => ({
      verticalAlign: 'right',
      [`@media (min-width: ${theme.breakpoints.desktopLarge})`]: {
        width: '1000px'
      }
    }));
    const snapshot = felaSnapshot(<Table>Table</Table>);
    expect(snapshot).toMatchSnapshot();
  });
});

describe('createTable', () => {
  it('should compose with styles overrides', () => {
    const Table = createTable(({ theme }) => ({
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
            <TableBody />
            <TableFoot />
          </table>
        )
      )
    );
    expect(snapshot).toMatchSnapshot();
  });

  it('should be able to render a div', () => {
    const Table = createTable(({ theme }) => ({
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
            <TableBody is="div">
              <TableRow is="div">
                <TableCell is="div" />
              </TableRow>
            </TableBody>
            <TableFoot is="div">
              <TableRow is="div">
                <TableCell is="div" />
              </TableRow>
            </TableFoot>
          </Table>
        )
      )
    );
    expect(snapshot).toMatchSnapshot();
  });
});
