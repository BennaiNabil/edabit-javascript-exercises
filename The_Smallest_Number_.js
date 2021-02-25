const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const lcm = (a, b) => (a * b) / gcd(a, b);
const smallest = (n) =>
  [...Array(n)].reduce((s, _, i) => lcm(s, BigInt(i + 1)), 1n);

console.log(smallest(50));
