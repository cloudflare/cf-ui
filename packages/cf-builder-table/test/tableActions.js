const assert = require('assert');
const { createMockStore } = require('cf-test-store');

const cf = require('cf-pony');
const { tableActions, TableActionTypes } = require('../src/index');

describe('tableActionsTest', function() {
  describe('.flashRow()', function() {
    it('should dispatch actions for flashing the row', function(done) {
      const store = createMockStore();
      const tableName = 'TEST_TABLE_NAME';
      const rowId = 'TEST_ROW_ID';
      store.dispatch(tableActions.flashRow(tableName, rowId, 'success'));
      assert.equal(store.getActions().length, 1);

      cf.requestAnimationFrame(() => {
        assert.equal(store.getActions().length, 1, 'should wait two frames');

        cf.requestAnimationFrame(() => {
          assert.deepEqual(store.getActions(), [
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
  });
});
