// Write a function called repeatStr which repeats the given string
// string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
	return s.repeat(n);
}

//OR:
function repeatStr(n, s) {
	let i = 0;
	let result = '';
	while (i < n) {
		result += s;
		i++;
	}
	return result;
}

//Test results:
describe('Tests', function() {
	it('Basic tests', function() {
		Test.assertSimilar(repeatStr(3, '*'), '***');
		Test.assertSimilar(repeatStr(5, '#'), '#####');
		Test.assertSimilar(repeatStr(2, 'ha '), 'ha ha ');
	});
});
