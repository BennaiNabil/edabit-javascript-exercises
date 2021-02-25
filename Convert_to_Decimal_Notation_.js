function convertToDecimal(per) {
    return per.map((x) => parseFloat(x.replace("%", "")) / 100);
}
