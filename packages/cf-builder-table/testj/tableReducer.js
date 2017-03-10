import { tableReducer, TableActionTypes } from 'cf-builder-table';

test('should have initial state', () => {
  expect(tableReducer(undefined, {})).toEqual({});
});

test('CF_BUILDER_TABLE_FLASH_ROW_ON should flash the row on', () => {
  const tableName = 'TEST_CARD_NAME';
  const rowId = 'TEST_DRAWER_ID';
  const rowType = 'success';

  expect(
    tableReducer(
      {},
      {
        type: TableActionTypes.CF_BUILDER_TABLE_FLASH_ROW_ON,
        tableName,
        rowId,
        rowType
      }
    )
  ).toEqual({
    [tableName]: {
      flashes: {
        [rowId]: rowType
      }
    }
  });
});

test('CF_BUILDER_TABLE_FLASH_ROW_OFF should flash the row off', () => {
  const tableName = 'TEST_CARD_NAME';
  const rowId = 'TEST_DRAWER_ID';
  const rowType = 'success';

  expect(
    tableReducer(
      {
        [tableName]: {
          flashes: {
            [rowId]: rowType
          }
        }
      },
      {
        type: TableActionTypes.CF_BUILDER_TABLE_FLASH_ROW_OFF,
        tableName,
        rowId
      }
    )
  ).toEqual({
    [tableName]: {
      flashes: {
        [rowId]: null
      }
    }
  });
});
