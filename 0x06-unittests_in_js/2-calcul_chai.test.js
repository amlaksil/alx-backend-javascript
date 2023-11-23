const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should round the numbers and return their sum', () => {
      const result1 = calculateNumber('SUM', 3.7, 2.1);
      expect(result1).to.equal(6);

      const result2 = calculateNumber('SUM', 9.4, 7.5);
      expect(result2).to.equal(17);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should round the numbers and return their subtraction', () => {
      const result1 = calculateNumber('SUBTRACT', 5.8, 1.2);
      expect(result1).to.equal(5);

      const result2 = calculateNumber('SUBTRACT', 10, 3.5);
      expect(result2).to.equal(6);
    });
  });

  describe('DIVIDE operation', () => {
    it('should round the numbers and return their division', () => {
      const result1 = calculateNumber('DIVIDE', 10, 3);
      expect(result1).to.be.closeTo(3.33, 0.01);

      const result2 = calculateNumber('DIVIDE', 8, 0);
      expect(result2).to.equal('Error');
    });
  });
});
