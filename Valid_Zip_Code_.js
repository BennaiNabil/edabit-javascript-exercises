function isValid(zip) {
  let patt = /^\d{5}$/;
  return patt.test(zip);
}
