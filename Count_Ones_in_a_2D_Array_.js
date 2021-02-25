function countOnes(matrix) {
    return (matrix.join(" ").replace(/,|\s/gi, "").match(/1/g) || []).length;
}
