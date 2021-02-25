function isPrefix(word, prefix) {
  var re = new RegExp("^" + prefix.replace("-", ""), "g");
  return re.test(word);
}

function isSuffix(word, suffix) {
  var re = new RegExp(suffix + "$", "g");
  return re.test(word);
}
