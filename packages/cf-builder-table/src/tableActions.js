// @flow

import type {TableAction, Dispatch} from './TableTypes';
const cf = require('cf-pony');

function flashRowOn(tableName, rowId, rowType): TableAction {
  return {
    type: 'CF_BUILDER_TABLE_FLASH_ROW_ON',
    tableName: tableName,
    rowId: rowId,
    rowType: rowType
  };
}

function flashRowOff(tableName, rowId): TableAction {
  return {
    type: 'CF_BUILDER_TABLE_FLASH_ROW_OFF',
    tableName: tableName,
    rowId: rowId
  };
}

exports.flashRow = function(tableName: string, rowId: string, rowType: string) {
  return (dispatch: Dispatch) => {
    dispatch(flashRowOn(tableName, rowId, rowType));

    cf.requestAnimationFrame(() => {
      cf.requestAnimationFrame(() => {
        dispatch(flashRowOff(tableName, rowId));
      });
    });
  };
};
