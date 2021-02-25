function isJS(path) {
  let pattern = /(\.jsx?)/gim;
  return pattern.test(path);
}

isJS("/users/user.jsx");
isJS("/users/user.js");
isJS("/users/user.ts");
