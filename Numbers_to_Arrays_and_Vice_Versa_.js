function toArray(num) {
  return Array.from(num.toString()).map((x) => parseInt(x));
}

function toNumber(arr) {
  return parseInt(arr.join(""));
}
