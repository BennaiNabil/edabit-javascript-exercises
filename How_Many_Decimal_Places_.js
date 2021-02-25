function getDecimalPlaces(num) {
    return num.indexOf(".") !== -1 ? num.length - num.indexOf(".") - 1 : 0;
}
