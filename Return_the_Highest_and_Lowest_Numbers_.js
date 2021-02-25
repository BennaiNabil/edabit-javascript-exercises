function highLow(str) {
  return (
    Math.max(...str.split(" ").map((x) => parseInt(x))) +
    " " +
    Math.min(...str.split(" ").map((x) => parseInt(x)))
  );
}
