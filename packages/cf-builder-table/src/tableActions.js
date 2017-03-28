import ActionTypes from './TableActionTypes';
import requestAnimationFrame from 'raf';

function flashRowOn(tableName, rowId, rowType) {
  return {
    type: ActionTypes.CF_BUILDER_TABLE_FLASH_ROW_ON,
    tableName: tableName,
    rowId: rowId,
    rowType: rowType
  };
}

function flashRowOff(tableName, rowId) {
  return {
    type: ActionTypes.CF_BUILDER_TABLE_FLASH_ROW_OFF,
    tableName: tableName,
    rowId: rowId
  };
}

const flashRow = function(tableName, rowId, rowType) {
  return dispatch => {
    dispatch(flashRowOn(tableName, rowId, rowType));

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        dispatch(flashRowOff(tableName, rowId));
      });
    });
  };
};

export default { flashRow };
