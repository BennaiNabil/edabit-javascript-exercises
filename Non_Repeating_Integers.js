function nonRepeats(radix) {
  function frac(n) {
    return n < 2 ? n : n * frac(n - 1);
  }
  return Math.floor(Math.E * (radix - 1) * frac(radix - 1));
}

console.log(nonRepeats(18));
