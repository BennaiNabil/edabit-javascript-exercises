function createPhoneNumber(numbers) {
    let part1 = numbers.slice(0, 3).join("");
    let part2 = numbers.slice(3, 6).join("");
    let part3 = numbers.slice(6, 10).join("");
    return `(${part1}) ${part2}-${part3}`;
}
