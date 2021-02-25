const REGEXP = /[^\w|\d|\s]/gi;
console.log("alice15@gmail.com".match(REGEXP));

// ➞["@", "."]
