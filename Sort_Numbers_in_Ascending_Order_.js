function sortNumsAscending(arr) {
  if (arr !== null) {
    return arr.sort((a, b) => a - b);
  }
  return [];
}
