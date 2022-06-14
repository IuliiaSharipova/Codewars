// Convert number to reversed array of digits
// Given a random non-negative number, you have to return
//  the digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(num) {
	return num.toString().split('').reverse().map(Number);
}

//Test:
const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Basic tests', () => {
	it('Testing for fixed tests', () => {
		assert.deepEqual(digitize(35231), [ 1, 3, 2, 5, 3 ]);
		assert.deepEqual(digitize(0), [ 0 ]);
	});
});
