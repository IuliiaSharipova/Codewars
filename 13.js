// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
	const century = Math.ceil(year / 100);
	return century;
}

//Test results:
describe('Tests', () => {
	it('test', () => {
		Test.assertEquals(century(1705), 18, 'Testing for year 1705');
		Test.assertEquals(century(1900), 19, 'Testing for year 1900');
		Test.assertEquals(century(1601), 17, 'Testing for year 1601');
		Test.assertEquals(century(2000), 20, 'Testing for year 2000');
		Test.assertEquals(century(89), 1, 'Testing for year 89');
	});
});
