function totalVolume(...boxes) {
  return boxes.map((x) => x[0] * x[1] * x[2]).reduce((s, el) => s + el, 0);
}
