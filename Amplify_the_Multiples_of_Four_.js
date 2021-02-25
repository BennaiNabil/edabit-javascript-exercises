function amplify(num) {
    return Array.apply(null, Array(num)).map(function (_, i) {
        return (i + 1) % 4 === 0 ? 10 * (i + 1) : i + 1;
    });
}
