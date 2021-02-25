function isPalindrome(n) {
    return Number(Array.from(n.toString()).reverse().join("")) === n;
}
