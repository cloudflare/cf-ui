const assert = require('assert');
const { tableReducer, TableActionTypes } = require('../src/index');

describe('tableReducerTest', () => {
  it('should have initial state', () => {
    assert.deepEqual(tableReducer(undefined, {}), {});
  });

  describe('CF_BUILDER_TABLE_FLASH_ROW_ON', () => {
    it('should flash the row on', () => {
      const tableName = 'TEST_CARD_NAME';
      const rowId = 'TEST_DRAWER_ID';
      const rowType = 'success';

      assert.deepEqual(
        tableReducer(
          {},
          {
            type: TableActionTypes.CF_BUILDER_TABLE_FLASH_ROW_ON,
            tableName,
            rowId,
            rowType
          }
        ),
        {
          [tableName]: {
            flashes: {
              [rowId]: rowType
            }
          }
        }
      );
    });
  });

  describe('CF_BUILDER_TABLE_FLASH_ROW_OFF', () => {
    it('should flash the row off', () => {
      const tableName = 'TEST_CARD_NAME';
      const rowId = 'TEST_DRAWER_ID';
      const rowType = 'success';

      assert.deepEqual(
        tableReducer(
          {
            [tableName]: {
              flashes: {
                [rowId]: rowType
              }
            }
          },
          {
            type: TableActionTypes.CF_BUILDER_TABLE_FLASH_ROW_ON,
            tableName,
            rowId
          }
        ),
        {
          [tableName]: {
            flashes: {
              [rowId]: null
            }
          }
        }
      );
    });
  });
});
