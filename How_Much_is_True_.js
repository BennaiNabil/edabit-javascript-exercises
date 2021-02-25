/*
How Much is True?

Create a function which returns the number of true values there are in an array.

Examples

countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0

Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).

*/

function countTrue(arr) {
    /*
      Maps the Array arr to the function x => Number(x) which returns an array with binary values (0 or 1)
      To count the number of true's in the initial array, one should just calculate the sum of the obtained array
  */
    return arr.map((x) => Number(x)).reduce((a, b) => a + b, 0);
}
