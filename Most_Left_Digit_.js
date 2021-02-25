function leftDigit(num) {
  const regex = /\d/;
  return num.match(regex)[0];
}

function leftDigitPerteDeTemps(num) {
  for (let index = 0; index < num.length; index++) {
    const element = num[index];
    if (!Number(element).isNaN()) {
      return parseInt(element);
    }
  }
}
