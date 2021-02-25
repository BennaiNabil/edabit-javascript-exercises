/*
Calculate the Mean

Create a function that takes an array of numbers and returns the mean value.

Examples
mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]) ➞ 2.55
mean([2, 3, 2, 3]) ➞ 2.50
mean([3, 3, 3, 3, 3]) ➞ 3.00

Notes
Round to two decimal places.
You can expect a number ranging from 0 to 10,000.
*/

function mean(arr) {
    return Math.round((100 * arr.reduce((a, b) => a + b, 0)) / arr.length) / 100;
}

console.log(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]));
