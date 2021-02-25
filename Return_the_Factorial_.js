function factorial(int) {
  if (int <= 1) {
    return 1;
  } else {
    return int * factorial(int - 1);
  }
}

function factorial2(int) {
  return Array.apply(null, Array(int))
    .map(function (_, i) {
      return i + 1;
    })
    .reduce((s, x) => s * x, 1);
}
