function addNums(nums) {
    return nums
        .replace(/,/, "")
        .split(" ")
        .reduce((s, x) => parseInt(x) + s, 0);
}
