export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse.validateString(name);
    this._length = HolbertonCourse.validateNumber(length);
    this._students = HolbertonCourse.validateArray(students);
  }

  static validateString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  static validateNumber(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return value;
  }

  static validateArray(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array');
    }
    return value;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = HolbertonCourse.validateString(newName);
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = HolbertonCourse.validateNumber(newLength);
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = HolbertonCourse.validateArray(newStudents);
  }
}
