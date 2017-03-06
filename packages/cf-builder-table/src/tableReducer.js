import ActionTypes from './TableActionTypes';

const initialState = {};

export default function tableReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CF_BUILDER_TABLE_FLASH_ROW_ON:
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

    case ActionTypes.CF_BUILDER_TABLE_FLASH_ROW_OFF:
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
