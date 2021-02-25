function inkLevels(inks) {
  return Math.min(...Object.entries(inks).map((t) => t[1]));
}
