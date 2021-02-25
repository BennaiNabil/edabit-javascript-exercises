/*

Maximum Possible Total

Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

Examples

maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43

maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ➞ 100

maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 40

*/

function maxTotal(nums) {
  return nums
    .sort((a, b) => a - b)
    .slice(5)
    .reduce((a, b) => a + b, 0);
}
