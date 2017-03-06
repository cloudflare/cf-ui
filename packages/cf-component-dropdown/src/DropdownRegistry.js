export default class DropdownRegistry {
  constructor() {
    this._links = [];
    this._currentFocusIndex = -1;
  }

  addChild(child) {
    this._links.push(child);
  }

  removeChild(child) {
    this._links.splice(this._links.indexOf(child), 1);
  }

  _focusChildAt(index) {
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

  setFocusedChild(child) {
    this._currentFocusIndex = this._links.indexOf(child);
  }

  removeFocusedChild() {
    this._currentFocusIndex = -1;
  }
}
