function isSymmetrical(num) {
  return num.toString() == Array.from(num.toString()).reverse().join("");
}
