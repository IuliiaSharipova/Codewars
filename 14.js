// Complete the function to return his total number of goals in all
//  three leagues.
// Note: the input will always be valid.
// For example:
// 5, 10, 2  -->  17

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
	return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//Test results:
describe('Tests', () => {
	it('test', () => {
		Test.assertEquals(goals(0, 0, 0), 0);
		Test.assertEquals(goals(43, 10, 5), 58);
	});
});
