function asciiCapitalize(str) {
    return Array.from(str)
        .map((letter) =>
            letter.charCodeAt() % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
        )
        .join("");
}
