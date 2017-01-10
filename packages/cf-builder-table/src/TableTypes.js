// @flow

import type { Dispatch as ReduxDispatch } from 'redux';

type FlashRowOn = {
  type: 'CF_BUILDER_TABLE_FLASH_ROW_ON',
  tableName: string,
  rowId: string,
  rowType: string
};

type FlashRowOff = {
  type: 'CF_BUILDER_TABLE_FLASH_ROW_OFF',
  tableName: string,
  rowId: string
};

export type TableAction =
  | FlashRowOn
  | FlashRowOff;

export type TableState = {
  [tableName: string]: {
    flashes: {
      [rowId: string]: null | string
    }
  }
};

export type Dispatch = ReduxDispatch<TableAction>;
