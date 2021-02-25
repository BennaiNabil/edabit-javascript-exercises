/*

Index Shuffle

Write a function that takes all even-indexed characters and odd-indexed characters from a string and concatenates them together.

To illustrate:

indexShuffle("abcd") ➞ "acbd"
"ac" (even-indexed) + "bd" (odd-indexed)

Examples
indexShuffle("abcdefg") ➞ "acegbdf"
indexShuffle("holiday") ➞ "hldyoia"
indexShuffle("maybe") ➞ "myeab"

Notes
0 should be treated as an even number.

*/

function indexShufflePrimitive(str) {
  let evenStr = "";
  let oddStr = "";
  for (let index = 0; index < str.length; index++) {
    let letter = str[index];
    if (index % 2 == 0) {
      evenStr += letter;
      e;
    } else {
      oddStr += letter;
    }
  }
  return evenStr + oddStr;
}

function indexShuffle(str) {
  const cond = (n) =>
    Array.from(str)
      .filter((element, index) => {
        return index % 2 === n;
      })
      .join("");

  return cond(0) + cond(1);
}

console.log(indexShuffle("holiday"));
