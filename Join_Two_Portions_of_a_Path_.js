function joinPath(portion1, portion2) {
  return portion1.replace(/\/$/, "") + "/" + portion2.replace(/^\//, "");
}
