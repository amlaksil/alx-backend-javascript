const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should round the numbers and return their sum', () => {
    // Test case 1
    const result1 = calculateNumber(3.7, 2.1);
    assert.strictEqual(result1, 6);

    // Test case 2
    const result2 = calculateNumber(9.4, 7.5);
    assert.strictEqual(result2, 17);

    // Test case 3
    const result3 = calculateNumber(5.8, 1.2);
    assert.strictEqual(result3, 7);

    // Test case 4
    const result4 = calculateNumber(0, 0);
    assert.strictEqual(result4, 0);
  });
});
