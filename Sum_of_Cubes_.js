function sumOfCubes(nums) {
  return nums.reduce((s, x) => s + Math.pow(x, 3), 0);
}
