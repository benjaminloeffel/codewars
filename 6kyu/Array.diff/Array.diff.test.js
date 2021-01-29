Test.describe('Sample tests', function () {
  Test.it('Should pass Sample tests', function () {
    Test.assertDeepEquals(arrayDiff([], [4, 5]), [], 'a was [], b was [4,5]');
    Test.assertDeepEquals(
      arrayDiff([3, 4], [3]),
      [4],
      'a was [3,4], b was [3]'
    );
    Test.assertDeepEquals(
      arrayDiff([3, 4, 5, 6], [3, 6]),
      [4, 5],
      'a was [3,4,5,6], b was [3,6]'
    );
  });
});
