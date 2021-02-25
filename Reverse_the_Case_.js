function reverseCase(str) {
  return Array.from(str).reduce(
    (s, l) => s + (l == l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()),
    ""
  );
}
