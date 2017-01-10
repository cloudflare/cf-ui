// @flow

import type {TableAction, TableState} from './TableTypes';

const initialState: TableState = {};

function tableReducer(state: TableState = initialState, action: TableAction) {
  switch (action.type) {
    case 'CF_BUILDER_TABLE_FLASH_ROW_ON':
      return {
        ...state,
        [action.tableName]: {
          ...state[action.tableName],
          flashes: {
            ...(state[action.tableName] && state[action.tableName].flashes),
            [action.rowId]: action.rowType
          }
        }
      };

    case 'CF_BUILDER_TABLE_FLASH_ROW_OFF':
      return {
        ...state,
        [action.tableName]: {
          ...state[action.tableName],
          flashes: {
            ...(state[action.tableName] && state[action.tableName].flashes),
            [action.rowId]: null
          }
        }
      };

    default:
      return state;
  }
}

module.exports = tableReducer;
