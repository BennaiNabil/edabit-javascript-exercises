function isOmnipresent(arr, val) {
  for (let index = 0; index < arr.length; index++) {
    const tmp = arr[index];
    if (!tmp.includes(val)) {
      return false;
    }
  }
  return true;
}
isOmnipresent(
  [
    [1, 1],
    [1, 3],
    [5, 1],
    [6, 1],
  ],
  6
);

/*

Test.assertEquals(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1), true)
Test.assertEquals(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6), false)
Test.assertEquals(isOmnipresent([[5], [5], [5], [6, 5]], 5), true)
Test.assertEquals(isOmnipresent([[5], [5], [5], [6, 5]], 6), false)
Test.assertEquals(isOmnipresent([[5, 1], [5, 1], [5, 1], [6, 5, 1]], 1), true)

*/
