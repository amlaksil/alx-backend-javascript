const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should round the numbers and return their sum', () => {
      const result1 = calculateNumber('SUM', 3.7, 2.1);
      assert.strictEqual(result1, 6);

      const result2 = calculateNumber('SUM', 9.4, 7.5);
      assert.strictEqual(result2, 17);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should round the numbers and return their subtraction', () => {
      const result1 = calculateNumber('SUBTRACT', 5.8, 1.2);
      assert.strictEqual(result1, 5);

      const result2 = calculateNumber('SUBTRACT', 10, 3.5);
      assert.strictEqual(result2, 6);
    });
  });

  describe('DIVIDE operation', () => {
    it('should round the numbers and return their division', () => {
      const result1 = calculateNumber('DIVIDE', 10, 3);
      assert.strictEqual(result1, 3.3333333333333335);

      const result2 = calculateNumber('DIVIDE', 8, 0);
      assert.strictEqual(result2, 'Error');
    });
  });
});
