/*

Hash Juggling

Create a function that:

Creates a sha256 hash from an array of strings.
Sorts the hash, alphas first digits second.
Returns a new sha256 hash from the sorted string.

Examples:

hashOps(["string1", "string2", "string3"]) ➞ "2d3b990149219819705bfe290571a9dcf5cf2a2528a2c711a57bd430ce32497f"
hashOps(["quick", "brown", "fox"] ) ➞ "7a2f7fdf31a4b14dd4f67e5ca8da3dabd7eac825eac259682e43d7e477b3d378"
hashOps(["i", "am", "not", "a", "crook"]) ➞ "d94ffa741e59d434b9e9e2ed32c2efc128238ba29eaa79cd0283d17a04a2d93f"

*/

function createHash(str) {
  return crypto.createHash("sha256").update(str).digest("hex");
}

function hashOps(arr) {
  let str = createHash(arr.join(""));
  return createHash(
    [...str]
      .filter((v) => v > "9")
      .concat([...str].filter((v) => v <= "9"))
      .join("")
  );
}
