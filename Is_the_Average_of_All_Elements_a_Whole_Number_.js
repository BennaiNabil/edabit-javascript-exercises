function isAvgWhole(arr) {
  return Number.isInteger(arr.reduce((s, x) => s + x, 0) / arr.length);
}
