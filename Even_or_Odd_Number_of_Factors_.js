/*

Even or Odd Number of Factors

Create a function that returns "even" if a number has an even number of factors and "odd" if a number has an odd number of factors.

Examples

factorGroup(33) ➞ "even"
factorGroup(36) ➞ "odd"
factorGroup(7) ➞ "even"

*/

function factorGroup(num) {
    return Number.isInteger(Math.sqrt(num)) ? "odd" : "even";
}
