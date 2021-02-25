function add(numberOne, numberTwo) {
  return ["", undefined, null].includes(numberOne) ||
    ["", undefined, null].includes(numberTwo)
    ? "Invalid Operation"
    : (Number(numberTwo) + Number(numberOne)).toString();
}
