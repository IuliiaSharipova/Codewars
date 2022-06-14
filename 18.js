// Complete the square sum function so that it squares each number
// passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because
// 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
	return numbers.map((num) => num ** 2).reduce((p, c) => p + c, 0);
}

//Test:
const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Tests', () => {
	it('test', () => {
		assert.strictEqual(squareSum([ 1, 2 ]), 5);
		assert.strictEqual(squareSum([ 0, 3, 4, 5 ]), 50);
		assert.strictEqual(squareSum([]), 0);
	});
});
