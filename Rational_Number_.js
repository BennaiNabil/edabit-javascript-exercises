/*
Rational Number

Declare a rational() function that gets two natural numbers (a, b) and return a string containing a record of the rational number a / b in the form of a decimal fraction, possibly periodic.

Examples

rational(2, 5) ➞ "0.4"
rational(1, 6) ➞ "0.1(6)"
rational(1, 3) ➞ "0.(3)"
rational(1, 7) ➞ "0.(142857)"
rational(1, 77) ➞ "0.(012987)"

Notes

Always a < b.
The length of a periodic fraction can be more than 20 numbers

*/
function rational(a, b) {
  let res = "0.";
  let c = [];
  let i = 1;
  c[0] = a;

  while (c[i - 1] > 0) {
    c[i] = c[i - 1] * 10;
    k = (c[i] - (c[i] % b)) / b;
    c[i] = c[i] % b;
    res += k;
    for (j = 0; j < i; j++) {
      if (c[i] == c[j]) {
        res = res.slice(0, j + 2) + "(" + res.slice(j + 2, i + 2) + ")";
        c[i] = 0;
      }
    }
    i++;
  }

  return res;
}

console.log(rational(1, 7));
