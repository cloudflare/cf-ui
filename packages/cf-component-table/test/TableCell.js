import React from 'react';
import renderer from 'react-test-renderer';
import { TableCell, createTableCell } from '../../cf-component-table/src/index';
import felaTestContext from '../../cf-style-provider/src/felaTestContext';
import felaSnapshot from '../../cf-style-provider/src/felaSnapshot';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

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

  it('can render a div', () => {
    const snapshot = felaSnapshot(<TableCell is="div">TableCell</TableCell>);
    expect(snapshot).toMatchSnapshot();
  });
});

describe('createTableCell', () => {
  it('should compose with styles overrides', () => {
    const TableCell = createTableCell(({ theme }) => ({
      verticalAlign: 'right',
      [`@media (min-width: ${theme.breakpoints.desktopLarge})`]: {
        width: '1000px'
      }
    }));
    const snapshot = toJSON(
      mount(
        felaTestContext(
          <table>
            <tbody>
              <tr>
                <TableCell />
              </tr>
            </tbody>
          </table>
        )
      )
    );
    expect(snapshot).toMatchSnapshot();
  });

  it('should be able to render a div', () => {
    const TableCell = createTableCell(({ theme }) => ({
      verticalAlign: 'right',
      [`@media (min-width: ${theme.breakpoints.desktopLarge})`]: {
        width: '1000px'
      }
    }));
    const snapshot = toJSON(mount(felaTestContext(<TableCell is="div" />)));
    expect(snapshot).toMatchSnapshot();
  });
});
