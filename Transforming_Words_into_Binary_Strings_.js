function convertBinary(str) {
  return Array.from(s.toLowerCase())
    .map((x) => (x >= "a" && x <= "m" ? "0" : "1"))
    .join("");
}

console.log(
  Array.apply(null, Array(50000))
    .map(function (_, i) {
      return i + 1;
    })
    .reduce((s, el) => s + el, 0) == 1250025000
);
console.log("1250025000");
