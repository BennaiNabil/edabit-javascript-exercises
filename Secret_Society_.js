function societyName(friends) {
  return Array.from(friends.reduce((s, x) => s + x[0].toUpperCase(), ""))
    .sort()
    .join("");
}
