/*

Convert Key, Values in an Object to Array

Write a function that converts an object into an array of keys and values.

Examples

objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

*/

function objectToArray(obj) {
    let res = [];
    for (let index in obj) {
      let attr = obj[index];
      res.push([index, attr]);
    }

    return res;
}
