function charIndex(word, char) {
    if (word.indexOf(char) === -1) {
        return undefined;
    } else {
    }
    let charOcc = [];
    for (let index = 0; index < word.length; index++) {
        const letter = word[index];
        if (char === letter) {
            charOcc.push(index);
        }
    }
    return [charOcc[0], charOcc[charOcc.length - 1]];
}
