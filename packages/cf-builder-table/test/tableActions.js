import { createMockStore } from '../../cf-test-store/src/index';
import cf from '../../cf-pony/src/index';
import { tableActions, TableActionTypes } from '../../cf-builder-table/src/index';

// this test is flaky, in 1/4 cases it just time outs
test.skip('.flashRow() should dispatch actions for flashing the row', done => {
  const store = createMockStore();
  const tableName = 'TEST_TABLE_NAME';
  const rowId = 'TEST_ROW_ID';
  store.dispatch(tableActions.flashRow(tableName, rowId, 'success'));
  expect(store.getActions().length).toBe(1);

  cf.requestAnimationFrame(() => {
    expect(store.getActions().length).toBe(1);

    cf.requestAnimationFrame(() => {
      expect(store.getActions()).toEqual([
        {
          type: TableActionTypes.CF_BUILDER_TABLE_FLASH_ROW_ON,
          tableName,
          rowId,
          rowType: 'success'
        },
        {
          type: TableActionTypes.CF_BUILDER_TABLE_FLASH_ROW_OFF,
          tableName: tableName,
          rowId: rowId
        }
      ]);
      done();
    });
  });
});
