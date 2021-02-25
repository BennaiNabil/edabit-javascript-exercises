function minutesToSeconds(time) {
  return parseInt(time.split(":")[1]) >= 60
    ? false
    : parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1]);
}
