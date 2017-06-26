import React from 'react';
import renderer from 'react-test-renderer';
import {
  TableHeadCell,
  createTableHeadCell
} from '../../cf-component-table/src/index';
import felaTestContext from '../../cf-style-provider/src/felaTestContext';
import felaSnapshot from '../../cf-style-provider/src/felaSnapshot';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('TableHeadCell', () => {
  it('should render', () => {
    const snapshot = felaSnapshot(<TableHeadCell>TableHeadCell</TableHeadCell>);
    expect(snapshot).toMatchSnapshot();
  });
});

describe('createTableHeadCell', () => {
  it('should compose with styles overrides', () => {
    const TableHeadCell = createTableHeadCell(({ theme }) => ({
      verticalAlign: 'right',
      [`@media (min-width: ${theme.breakpoints.desktopLarge})`]: {
        width: '1000px'
      }
    }));
    const snapshot = toJSON(
      mount(
        felaTestContext(
          <table>
            <thead>
              <tr>
                <TableHeadCell />
              </tr>
            </thead>
          </table>
        )
      )
    );
    expect(snapshot).toMatchSnapshot();
  });

  it('should be able to render a div', () => {
    const TableHeadCell = createTableHeadCell(({ theme }) => ({
      verticalAlign: 'right',
      [`@media (min-width: ${theme.breakpoints.desktopLarge})`]: {
        width: '1000px'
      }
    }));
    const snapshot = toJSON(mount(felaTestContext(<TableHeadCell is="div" />)));
    expect(snapshot).toMatchSnapshot();
  });
});
