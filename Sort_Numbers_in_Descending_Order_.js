function sortDescending(num) {
  return parseInt(
    Array.from(num.toString())
      .map((x) => parseInt(x))
      .sort((a, b) => b - a)
      .join("")
  );
}
