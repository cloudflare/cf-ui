// @flow

import type DropdownLink from './DropdownLink';

class DropdownRegistry {
  _links: Array<DropdownLink | void>;
  _currentFocusIndex: number;

  constructor() {
    this._links = [];
    this._currentFocusIndex = -1;
  }

  addChild(child: DropdownLink) {
    this._links.push(child);
  }

  removeChild(child: DropdownLink) {
    this._links.splice(this._links.indexOf(child), 1);
  }

  _focusChildAt(index: number) {
    if (this._links[index]) {
      this._links[index].focus();
    }
  }

  focusNext() {
    this._focusChildAt(this._currentFocusIndex + 1);
  }

  focusPrev() {
    this._focusChildAt(this._currentFocusIndex - 1);
  }

  setFocusedChild(child: DropdownLink) {
    this._currentFocusIndex = this._links.indexOf(child);
  }

  removeFocusedChild() {
    this._currentFocusIndex = -1;
  }
}

module.exports = DropdownRegistry;
