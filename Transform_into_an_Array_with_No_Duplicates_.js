/*
function set(arr) {
  let res = [];
  arr.forEach((element) => {
    if (!res.includes(element)) {
      res.push(element);
    }
  });
  return res;
}
*/

function set(arr) {
  return [...new Set(arr)];
}
