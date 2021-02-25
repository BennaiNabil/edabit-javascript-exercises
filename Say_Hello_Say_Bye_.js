function sayHelloBye(name, num) {
  return `${num === 0 ? "Bye" : "Hello"} ${
    name[0].toUpperCase() + name.slice(1)
  }`;
}
