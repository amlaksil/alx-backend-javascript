export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valueOf() {
    /* Invoked when the class is cast into a Number */
    return this._size;
  }

  toString() {
    /* Invoked when the class is cast into a String */
    return this._location;
  }
}
